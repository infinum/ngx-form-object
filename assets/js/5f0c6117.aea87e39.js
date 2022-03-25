"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[222],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1228:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"form-store",title:"FormStore",sidebar_label:"FormStore"},d={unversionedId:"api-reference/extended-form-controls/form-store",id:"version-9.0.0/api-reference/extended-form-controls/form-store",isDocsHomePage:!1,title:"FormStore",description:"FormStore extends FormGroup. Tracks the value and validity state of a group of AbstractControl instances.",source:"@site/versioned_docs/version-9.0.0/api-reference/extended-form-controls/form-store.md",sourceDirName:"api-reference/extended-form-controls",slug:"/api-reference/extended-form-controls/form-store",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/form-store",version:"9.0.0",sidebar_label:"FormStore",frontMatter:{id:"form-store",title:"FormStore",sidebar_label:"FormStore"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"ExtendedFormArray",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/extended-form-array"},next:{title:"Base form object",permalink:"/ngx-form-object/docs/guides/base-form-object"}},p=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"get isChanged",id:"get-ischanged",children:[]},{value:"formObject",id:"formobject",children:[]},{value:"get model",id:"get-model",children:[]},{value:"get isSubmitted",id:"get-issubmitted",children:[]}]},{value:"Methods",id:"methods",children:[{value:"save()",id:"save",children:[]}]}],m={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FormStore")," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"FormGroup"),". Tracks the value and validity state of a group of ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractControl")," instances."),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(\n    controls: { [key: string]: AbstractControl; },\n    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,\n    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null\n)\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"get-ischanged"},"get isChanged"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if any of ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore"),"'s controls or relationships have changed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get isChanged()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,o.kt)("h3",{id:"formobject"},"formObject"),(0,o.kt)("p",null,"Getter and setter for ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject")," for this ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"set formObject(formObject: FormObject<T>)")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get formObject()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FormObject<T>"))))),(0,o.kt)("h3",{id:"get-model"},"get model"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get model()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"T"))))),(0,o.kt)("h3",{id:"get-issubmitted"},"get isSubmitted"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore.save")," method was already called, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get isSubmitted()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"save"},"save()"),(0,o.kt)("p",null,"Initiates the saving process. See more about the saving process in ",(0,o.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/guides/saving-forms"},"the guide"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"save()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Observable<T>"))))))}c.isMDXComponent=!0}}]);