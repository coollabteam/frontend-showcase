(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4,5],{265:function(e,t,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(80).default)("9b635bba",content,!0,{sourceMap:!1})},266:function(e,t,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(80).default)("7f1f2164",content,!0,{sourceMap:!1})},267:function(e,t,r){"use strict";r(265)},268:function(e,t,r){var n=r(79)((function(i){return i[1]}));n.push([e.i,"\n.form-input.border-red-500[data-v-4d0745fa]:focus {\n  border-color: #e3342f;\n}\n",""]),n.locals={},e.exports=n},269:function(e,t,r){"use strict";r(266)},270:function(e,t,r){var n=r(79)((function(i){return i[1]}));n.push([e.i,"\n/* Add any additional styling here */\n",""]),n.locals={},e.exports=n},271:function(e,t,r){"use strict";r.r(t);r(190),r(25),r(48);var n={name:"TextField",props:{label:{type:String,required:!0},value:{type:String,default:""},validation:{type:String,default:""},validationMessage:{type:String,default:""},required:{type:Boolean,default:!1},submitted:{type:Boolean,default:!1}},data:function(){return{internalValue:this.value}},watch:{value:function(e){this.internalValue=e},internalValue:function(){this.$emit("input",this.internalValue)}},computed:{isValid:function(){return!this.validation||new RegExp(this.validation).test(this.internalValue)}}},o=(r(267),r(45)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-lg font-medium text-gray-700 mb-2",attrs:{for:e.label}},[e._v("\n    "+e._s(e.label)+"\n    "),e.required?t("span",{staticClass:"text-red-500"},[e._v("*")]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.internalValue,expression:"internalValue"}],class:["form-input",{"border-red-500":e.required&&!e.isValid&&e.submitted},"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"],attrs:{id:e.label,type:"text",placeholder:e.label},domProps:{value:e.internalValue},on:{input:[function(t){t.target.composing||(e.internalValue=t.target.value)},function(t){return e.$emit("input",e.internalValue)}]}}),e._v(" "),e.validationMessage&&!e.isValid&&e.submitted?t("span",{staticClass:"text-red-500 text-xs"},[e._v(e._s(e.validationMessage))]):e._e()])}),[],!1,null,"4d0745fa",null);t.default=component.exports},272:function(e,t,r){"use strict";r.r(t);r(46),r(47),r(19);var n={name:"Dropdown",props:{label:{type:String,required:!0},value:{type:String,default:""},options:{type:Array,required:!0},validationMessage:{type:String,default:""},required:{type:Boolean,default:!1},submitted:{type:Boolean,default:!1}},data:function(){return{selected:this.value}},computed:{isValid:function(){return""!==this.selected}},watch:{value:function(e){this.selected=e}}},o=(r(269),r(45)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-lg font-medium text-gray-700 mb-2",attrs:{for:e.label}},[e._v("\n    "+e._s(e.label)+"\n    "),e.required?t("span",{staticClass:"text-red-500"},[e._v("*")]):e._e()]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",attrs:{id:e.label},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?r:r[0]},function(t){return e.$emit("input",e.selected)}]}},[t("option",{staticClass:"text-gray-400",attrs:{disabled:"",value:""}},[e._v("Please select an option")]),e._v(" "),e._l(e.options,(function(option){return t("option",{key:option.key,domProps:{value:option.key}},[e._v("\n      "+e._s(option.label)+"\n    ")])}))],2),e._v(" "),e.validationMessage&&!e.isValid&&e.submitted?t("span",{staticClass:"text-red-500 text-xs"},[e._v(e._s(e.validationMessage))]):e._e()])}),[],!1,null,"1813e22f",null);t.default=component.exports},273:function(e,t,r){"use strict";var n=r(2),o=r(4),l=r(30),d=r(24),c=r(35),f=r(191),m=r(10),v=r(3),h=r(192),x=r(135),y=r(274),_=r(275),w=r(81),F=r(276),M=[],C=o(M.sort),k=o(M.push),V=v((function(){M.sort(void 0)})),D=v((function(){M.sort(null)})),S=x("sort"),j=!v((function(){if(w)return w<70;if(!(y&&y>3)){if(_)return!0;if(F)return F<603;var code,e,t,r,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(r=0;r<47;r++)M.push({k:e+r,v:t})}for(M.sort((function(a,b){return b.v-a.v})),r=0;r<M.length;r++)e=M[r].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:V||!D||!S||!j},{sort:function(e){void 0!==e&&l(e);var t=d(this);if(j)return void 0===e?C(t):C(t,e);var r,n,o=[],v=c(t);for(n=0;n<v;n++)n in t&&k(o,t[n]);for(h(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:m(t)>m(r)?1:-1}}(e)),r=c(o),n=0;n<r;)t[n]=o[n++];for(;n<v;)f(t,n++);return t}})},274:function(e,t,r){"use strict";var n=r(61).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},275:function(e,t,r){"use strict";var n=r(61);e.exports=/MSIE|Trident/.test(n)},276:function(e,t,r){"use strict";var n=r(61).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},277:function(e){e.exports=JSON.parse('{"forms":[{"label":"User Information","fields":[{"label":"username","type":"text","validation":"^[a-zA-Z0-9 ]+$","selectOption":[],"validationMessage":"username should contains only text and number","require":true,"order":1},{"label":"gender","type":"select","validation":"/^(m|M|f|F |male|MALE|Male|female|Female|FEMALE)$/","selectOption":[{"key":"M","label":"Male"},{"key":"F","label":"Female"}],"validationMessage":"gender should be Male or Female","require":false,"order":2},{"label":"address","type":"text","validation":"^[\\\\w\\\\s\\\\d.,#,-]+$","selectOption":[],"validationMessage":"address should contains only text, number and space","require":true,"order":4},{"label":"age","type":"text","validation":"^(?:[1-9]|[1-9][0-9]|100)$","selectOption":[],"validationMessage":"address should contains only text, number and space","require":true,"order":3}]}]}')},279:function(e,t,r){"use strict";r.r(t);var n=r(13),o=(r(62),r(273),r(49),r(19),r(36),r(271)),l=r(272),d=r(277),c={name:"NuxtTutorial",components:{TextField:o.default,Dropdown:l.default},data:function(){return{title:"",formData:{},fields:[],submitted:!1,error:{},jsonForm:JSON.stringify(d,null,4)}},created:function(){this.renderForm()},methods:{renderForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{data=JSON.parse(e.jsonForm),e.title=data.forms[0].label,e.fields=data.forms[0].fields.sort((function(a,b){return a.order-b.order})),e.initializeFormData()}catch(e){console.error("##Error fetching data:",e)}case 1:case"end":return t.stop()}}),t)})))()},initializeFormData:function(){var e=this;this.fields.forEach((function(t){e.$set(e.formData,t.label,"")}))},getComponentType:function(e){return"text"===e?"TextField":"select"===e?"Dropdown":"TextField"},validateForm:function(){var e=this;this.errors={};var t=!0;return this.fields.forEach((function(r){r.require&&!e.formData[r.label]?(e.errors[r.label]=r.validationMessage||"This field is required.",t=!1):r.validation&&"function"==typeof r.validation&&!r.validation(e.formData[r.label])&&(e.errors[r.label]=r.validationMessage||"Invalid input.",t=!1)})),t},submitForm:function(){this.submitted=!0,this.validateForm()?this.$toast.show("Form submitted successfully"):console.error("##Form validation failed.")}}},f=r(45),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row items-center justify-center min-h-screen bg-gray-100 p-4"},[t("div",{staticClass:"w-full bg-white m-4 p-6 rounded-lg shadow-md"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonForm,expression:"jsonForm"}],staticClass:"w-full",staticStyle:{height:"465px"},domProps:{value:e.jsonForm},on:{input:[function(t){t.target.composing||(e.jsonForm=t.target.value)},e.renderForm]}})]),e._v(" "),t("div",{staticClass:"w-full bg-white m-4 p-6 rounded-lg shadow-md"},[t("h2",{staticClass:"text-2xl font-bold text-center mb-4"},[e._v(e._s(e.title))]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._l(e.fields,(function(r,n){return t(e.getComponentType(r.type),{key:n,tag:"component",attrs:{label:r.label,options:r.selectOption,required:r.require,validation:r.validation,validationMessage:r.validationMessage,submitted:e.submitted},model:{value:e.formData[r.label],callback:function(t){e.$set(e.formData,r.label,t)},expression:"formData[field.label]"}})})),e._v(" "),e._m(0)],2)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"flex flex-col justify-center"},[e("button",{staticClass:"mt-4 px-6 py-3 bg-blue-500 text-white font-semi-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null);t.default=component.exports},282:function(e,t,r){"use strict";r.r(t);var n={name:"IndexPage"},o=r(45),component=Object(o.a)(n,(function(){return(0,this._self._c)("Tutorial")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Tutorial:r(279).default})}}]);