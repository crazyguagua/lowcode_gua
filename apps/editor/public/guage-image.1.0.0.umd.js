(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.GuageImage=n(e.Vue))})(this,function(e){"use strict";const n=["src"];return{render:e.defineComponent({__name:"app",props:{src:{}},setup(o){return(t,r)=>(e.openBlock(),e.createElementBlock("img",{src:t.src,alt:""},null,8,n))}}),editorProps:{src:{type:"string",defaultValue:""}}}});