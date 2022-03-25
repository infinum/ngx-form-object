"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[146],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),s=a,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5785:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"extended-form-array",title:"ExtendedFormArray",sidebar_label:"ExtendedFormArray"},d={unversionedId:"api-reference/extended-form-controls/extended-form-array",id:"version-9.0.0/api-reference/extended-form-controls/extended-form-array",isDocsHomePage:!1,title:"ExtendedFormArray",description:"ExtendedFormArray extends FormArray. Tracks the value and validity state of its elements - FormControl, FormGroup, FormStore or FormArray instances.",source:"@site/versioned_docs/version-9.0.0/api-reference/extended-form-controls/extended-form-array.md",sourceDirName:"api-reference/extended-form-controls",slug:"/api-reference/extended-form-controls/extended-form-array",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/extended-form-array",version:"9.0.0",sidebar_label:"ExtendedFormArray",frontMatter:{id:"extended-form-array",title:"ExtendedFormArray",sidebar_label:"ExtendedFormArray"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"ExtendedFormControl",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/extended-form-control"},next:{title:"FormStore",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/form-store"}},p=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"get isChanged",id:"get-ischanged",children:[]},{value:"get currentValue",id:"get-currentvalue",children:[]},{value:"get currentRawValue",id:"get-currentrawvalue",children:[]},{value:"initialValue",id:"initialvalue",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear()",id:"clear",children:[]},{value:"replaceWith()",id:"replacewith",children:[]},{value:"resetValue()",id:"resetvalue",children:[]}]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," extends ",(0,l.kt)("inlineCode",{parentName:"p"},"FormArray"),". Tracks the value and validity state of its elements - ",(0,l.kt)("inlineCode",{parentName:"p"},"FormControl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FormGroup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FormStore")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"FormArray")," instances."),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(\n    controls: Array<AbstractControl>,\n    validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions | null,\n    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn> | null,\n    propertyOptions?: PropertyOptions\n)\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"get-ischanged"},"get isChanged"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if current value is not equal to initial value, ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get isChanged()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,l.kt)("h3",{id:"get-currentvalue"},"get currentValue"),(0,l.kt)("p",null,"Returns the current value of the control."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get currentValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>"))))),(0,l.kt)("h3",{id:"get-currentrawvalue"},"get currentRawValue"),(0,l.kt)("p",null,"Returns the current value of the array, regardless of the ",(0,l.kt)("inlineCode",{parentName:"p"},"disabled")," status of its controls ."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get currentRawValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>"))))),(0,l.kt)("h3",{id:"initialvalue"},"initialValue"),(0,l.kt)("p",null,"Getter and setter for initial value of the control."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get initialValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set initialValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"clear"},"clear()"),(0,l.kt)("p",null,"Removes all controls from the array. If ",(0,l.kt)("inlineCode",{parentName:"p"},"clearFlags")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," it also resets the array making it ",(0,l.kt)("inlineCode",{parentName:"p"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"untouched"),", and sets the current value to ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clear(clearFlags?: boolean)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void"))))),(0,l.kt)("h3",{id:"replacewith"},"replaceWith()"),(0,l.kt)("p",null,"Replaces all controls from the array with new ones. If ",(0,l.kt)("inlineCode",{parentName:"p"},"clearFlags")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," it also resets the array making it ",(0,l.kt)("inlineCode",{parentName:"p"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"untouched"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replaceWith(newItems: Array<any>, clearFlags?: boolean)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void"))))),(0,l.kt)("h3",{id:"resetvalue"},"resetValue()"),(0,l.kt)("p",null,"Resets the underlying form control, marking it ",(0,l.kt)("inlineCode",{parentName:"p"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"untouched")," and sets the current and initial value to the one provided. If no value argument is provided, sets those values to ",(0,l.kt)("inlineCode",{parentName:"p"},"control.currentValue"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resetValue(value?: any)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value: any"))))))}m.isMDXComponent=!0}}]);