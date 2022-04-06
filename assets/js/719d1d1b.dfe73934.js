"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[860],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},723:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"extended-form-control",title:"ExtendedFormControl",sidebar_label:"ExtendedFormControl"},d={unversionedId:"api-reference/extended-form-controls/extended-form-control",id:"api-reference/extended-form-controls/extended-form-control",isDocsHomePage:!1,title:"ExtendedFormControl",description:"ExtendedFormControl extends FormControl. Tracks the value and validation status of an individual form control.",source:"@site/docs/api-reference/extended-form-controls/extended-form-control.md",sourceDirName:"api-reference/extended-form-controls",slug:"/api-reference/extended-form-controls/extended-form-control",permalink:"/ngx-form-object/docs/next/api-reference/extended-form-controls/extended-form-control",version:"current",sidebar_label:"ExtendedFormControl",frontMatter:{id:"extended-form-control",title:"ExtendedFormControl",sidebar_label:"ExtendedFormControl"},sidebar:"mainSidebar",previous:{title:"Decorators",permalink:"/ngx-form-object/docs/next/api-reference/decorators"},next:{title:"ExtendedFormArray",permalink:"/ngx-form-object/docs/next/api-reference/extended-form-controls/extended-form-array"}},u=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"get isChanged",id:"get-ischanged",children:[]},{value:"get currentValue",id:"get-currentvalue",children:[]},{value:"initialValue",id:"initialvalue",children:[]}]},{value:"Methods",id:"methods",children:[{value:"resetValue()",id:"resetvalue",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"FormControl"),". Tracks the value and validation status of an individual form control."),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(\n    formState?: any,\n    validator?: ValidatorFn | Array<ValidatorFn>,\n    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn>,\n    isRelationship?: boolean,\n    propertyOptions?: PropertyOptions\n)\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"get-ischanged"},"get isChanged"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if current value is not equal to initial value, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get isChanged()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,o.kt)("h3",{id:"get-currentvalue"},"get currentValue"),(0,o.kt)("p",null,"Returns the current value of the control."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get currentValue()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h3",{id:"initialvalue"},"initialValue"),(0,o.kt)("p",null,"Getter and setter for initial value of the control."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"get initialValue()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"set initialValue()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"resetvalue"},"resetValue()"),(0,o.kt)("p",null,"Resets the underlying form control, marking it ",(0,o.kt)("inlineCode",{parentName:"p"},"pristine")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"untouched")," and sets the current and initial value to the one provided. If no value argument is provided, sets those values to ",(0,o.kt)("inlineCode",{parentName:"p"},"control.currentValue"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resetValue(value?: any)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value: any"))))))}c.isMDXComponent=!0}}]);