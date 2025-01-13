"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,u=f["".concat(s,".").concat(p)]||f[p]||b[p]||c;return r?o.createElement(u,a(a({ref:t},m),{},{components:r})):o.createElement(u,a({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const c={id:"base-form-object",title:"Base form object",sidebar_label:"Base form object"},a=void 0,i={unversionedId:"guides/base-form-object",id:"version-9.0.0/guides/base-form-object",title:"Base form object",description:"Base form object is just an abstraction on top of our other form objects. All other form object will extend base form object. Base form object is optional but it is highly recommended as it simplifies the code by giving us the ability to specify data which can be accessed from all other form objects.",source:"@site/versioned_docs/version-9.0.0/guides/base-form-object.md",sourceDirName:"guides",slug:"/guides/base-form-object",permalink:"/ngx-form-object/docs/guides/base-form-object",draft:!1,tags:[],version:"9.0.0",frontMatter:{id:"base-form-object",title:"Base form object",sidebar_label:"Base form object"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"FormStore",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/form-store"},next:{title:"Creating complex forms",permalink:"/ngx-form-object/docs/guides/creating-complex-forms"}},s={},l=[],m={toc:l};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Base form object is just an abstraction on top of our other form objects. All other form object will extend base form object. Base form object is optional but it is highly recommended as it simplifies the code by giving us the ability to specify data which can be accessed from all other form objects."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="base.form-object.ts"',title:'"base.form-object.ts"'},"import { FormObject, FormObjectOptions } from 'ngx-form-object';\n\nexport class BaseFormObject<T> extends FormObject<T> {\n  constructor(\n    public model: T,\n    protected options: FormObjectOptions\n  ) {\n    super(model, options);\n  }\n}\n\n")))}f.isMDXComponent=!0}}]);