(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{265:function(e,t,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("9b635bba",content,!0,{sourceMap:!1})},267:function(e,t,n){"use strict";n(265)},268:function(e,t,n){var l=n(79)((function(i){return i[1]}));l.push([e.i,"\n.form-input.border-red-500[data-v-4d0745fa]:focus {\n  border-color: #e3342f;\n}\n",""]),l.locals={},e.exports=l},271:function(e,t,n){"use strict";n.r(t);n(190),n(25),n(48);var l={name:"TextField",props:{label:{type:String,required:!0},value:{type:String,default:""},validation:{type:String,default:""},validationMessage:{type:String,default:""},required:{type:Boolean,default:!1},submitted:{type:Boolean,default:!1}},data:function(){return{internalValue:this.value}},watch:{value:function(e){this.internalValue=e},internalValue:function(){this.$emit("input",this.internalValue)}},computed:{isValid:function(){return!this.validation||new RegExp(this.validation).test(this.internalValue)}}},r=(n(267),n(45)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-lg font-medium text-gray-700 mb-2",attrs:{for:e.label}},[e._v("\n    "+e._s(e.label)+"\n    "),e.required?t("span",{staticClass:"text-red-500"},[e._v("*")]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],class:["form-input",{"border-red-500":e.required&&!e.isValid&&e.submitted},"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"],attrs:{id:e.label,type:"text",placeholder:e.label},domProps:{value:e.internalValue},on:{input:[function(t){t.target.composing||(e.internalValue=t.target.value)},function(t){return e.$emit("input",e.internalValue)}]}}),e._v(" "),e.validationMessage&&!e.isValid&&e.submitted?t("span",{staticClass:"text-red-500 text-xs"},[e._v(e._s(e.validationMessage))]):e._e()])}),[],!1,null,"4d0745fa",null);t.default=component.exports}}]);