!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTabWizard=e():t.VueTabWizard=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,n,i){var s,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),i){var c=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),r.computed=c}return{esModule:s,exports:a,options:r}}},function(t,e,n){var i=n(0)(n(3),n(9),null,null);i.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\TabContent.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TabContent.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){n(7),n(6);var i=n(0)(n(4),n(8),null,null);i.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\TabWizard.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TabWizard.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function}},data:function(){return{show:!1,active:!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},color:{type:String,default:"#e74c3c"},shape:{type:String,default:"circle"},transition:{type:String,default:""},startIndex:{type:Number,default:0}},data:function(){return{activeTabIndex:0,isLastStep:!1,currentPercentage:0,maxStep:0,tabs:[]}},computed:{tabCount:function(){return this.tabs.length},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},iconActiveStyle:function(){return{backgroundColor:this.color}},stepCheckedStyle:function(){return{borderColor:this.color}},stepTitleStyle:function(){return{color:this.color}},isStepSquare:function(){return"square"===this.shape},isTabShape:function(){return"tab"===this.shape},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){var t=0;if(this.activeTabIndex>0){var e=this.activeTabIndex%2==0?3:2;t=this.stepPercentage*(this.activeTabIndex+e)}else t=this.stepPercentage;return t}},methods:{isChecked:function(t){return t<=this.maxStep},navigateToTab:function(t){t<=this.maxStep&&this.beforeTabChange(this.activeTabIndex)&&this.changeTab(this.activeTabIndex,t)},beforeTabChange:function(t){var e=this.tabs[t];return!e||void 0===e.beforeChange||e.beforeChange()},changeTab:function(t,e){var n=this.tabs[t],i=this.tabs[e];return n&&(n.show=!1,n.active=!1),i&&(i.show=!0,i.active=!0),this.activeTabIndex=e,this.checkStep(),!0},checkStep:function(){this.activeTabIndex===this.tabCount-1?this.isLastStep=!0:this.isLastStep=!1},increaseMaxStep:function(){this.activeTabIndex>this.maxStep&&(this.maxStep=this.activeTabIndex)},nextTab:function(){this.beforeTabChange(this.activeTabIndex)&&(this.activeTabIndex<this.tabCount-1?(this.activeTabIndex++,this.increaseMaxStep(),this.checkStep()):(this.isLastStep=!0,this.$emit("finished")))},prevTab:function(){this.beforeTabChange(this.activeTabIndex)&&this.activeTabIndex>0&&(this.activeTabIndex--,this.isLastStep=!1)},finish:function(){this.$emit("on-complete")}},mounted:function(){if(this.tabs=this.$children.filter(function(t){return"tab-content"===t.$options.name}),this.tabs.length>0){var t=this.tabs[this.activeTabIndex];t.show=!0,t.active=!0}this.startIndex<this.tabs.length?(this.activeTabIndex=this.startIndex,this.maxStep=this.startIndex):console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")},watch:{activeTabIndex:function(t,e){this.beforeTabChange(e)&&this.changeTab(e,t)}}}},function(t,e,n){t.exports={TabWizard:n(2),TabContent:n(1),install:function(e){e.component("tab-wizard",t.exports.TabWizard),e.component("tab-content",t.exports.TabContent)}}},function(t,e){},function(t,e){},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-tab-wizard"},[n("div",{staticClass:"wizard-header"},[t._t("title",[n("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),n("div",{staticClass:"wizard-navigation"},[n("div",{staticClass:"progress-with-circle"},[n("div",{staticClass:"progress-bar",style:t.progressBarStyle})]),t._v(" "),n("ul",{staticClass:"nav nav-pills"},t._l(t.tabs,function(e,i){return n("li",{class:{active:e.active}},[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.navigateToTab(i)}}},[n("div",{staticClass:"icon-circle",class:{checked:t.isChecked(i),square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:t.isChecked(i)?t.stepCheckedStyle:{}},[n("transition",{attrs:{name:t.transition,mode:"out-in"}},[e.active?n("div",{staticClass:"icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:e.active?t.iconActiveStyle:{}},[e.icon?n("i",{staticClass:"icon",class:e.icon}):n("i",{staticClass:"icon"},[t._v(t._s(i+1))])]):t._e(),t._v(" "),!e.active&&e.icon?n("i",{staticClass:"icon",class:e.icon}):t._e(),t._v(" "),e.active||e.icon?t._e():n("i",{staticClass:"icon"},[t._v(t._s(i+1))])])],1),t._v(" "),n("span",{staticClass:"stepTitle",style:e.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(e.title)+"\n          ")])])])})),t._v(" "),n("div",{staticClass:"tab-content"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"card-footer"},[[t.displayPrevButton?n("span",{on:{click:t.prevTab}},[t._t("prev",[n("button",{staticClass:"btn btn-default btn-wd",style:t.fillButtonStyle,attrs:{type:"button"}},[t._v("\n            "+t._s(t.backButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?n("span",{staticClass:"pull-right",on:{click:t.finish}},[t._t("finish",[n("button",{staticClass:"btn btn-fill btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button"}},[t._v("\n            "+t._s(t.finishButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?t._e():n("span",{staticClass:"pull-right",on:{click:t.nextTab}},[t._t("next",[n("button",{staticClass:"btn btn-fill btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button"}},[t._v("\n          "+t._s(t.nextButtonText)+"\n         ")])])],2)],t._v(" "),n("div",{staticClass:"clearfix"})],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab-container"},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}])});