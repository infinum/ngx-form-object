"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6642:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"extended-form-controls",title:"Extended form controls",sidebar_label:"Extended form controls"},d={unversionedId:"extended-form-controls",id:"extended-form-controls",isDocsHomePage:!1,title:"Extended form controls",description:"When you use FormObjectBuilder to build forms from models, extended versions of form groups and controls will be created.",source:"@site/docs/extended-form-controls.md",sourceDirName:".",slug:"/extended-form-controls",permalink:"/ngx-form-object/docs/next/extended-form-controls",editUrl:"https://github.com/infinum/ngx-form-object/docs/extended-form-controls.md",version:"current",sidebar_label:"Extended form controls",frontMatter:{id:"extended-form-controls",title:"Extended form controls",sidebar_label:"Extended form controls"},sidebar:"mainSidebar",previous:{title:"Decorators",permalink:"/ngx-form-object/docs/next/decorators"}},m=[{value:"<code>ExtendedFormControl</code>",id:"extendedformcontrol",children:[]},{value:"ExtendedFormArray",id:"extendedformarray",children:[]},{value:"FormStore",id:"formstore",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When you use ",(0,l.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder")," to build forms from models, extended versions of form groups and controls will be created.\nAll of the extended controls add functionality to either ",(0,l.kt)("inlineCode",{parentName:"p"},"FormGroup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FormControl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"FormArray"),". For the most part, you can treat extended form controls just like you would regular Angular form controls."),(0,l.kt)("h2",{id:"extendedformcontrol"},(0,l.kt)("inlineCode",{parentName:"h2"},"ExtendedFormControl")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," extends ",(0,l.kt)("inlineCode",{parentName:"p"},"FormControl"),". It exposes the following public properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get isChanged()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if current value is not equal to initial value, ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," otherwise")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get currentValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current value of the control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get initialValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the initial value of the control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set initialValue(value:any)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the initial value of the control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resetValue(value: any)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Resets the underlying form control, marking it ",(0,l.kt)("inlineCode",{parentName:"td"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"untouched")," and sets the current and initial value to the one provided. If no value argument is provided, sets those values to ",(0,l.kt)("inlineCode",{parentName:"td"},"control.currentValue"))))),(0,l.kt)("h2",{id:"extendedformarray"},"ExtendedFormArray"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," extends ",(0,l.kt)("inlineCode",{parentName:"p"},"FormArray"),". It exposes the following public properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isChanged")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if current value is not equal to initial value, ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," otherwise")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get currentValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current value of the control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get initialValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the initial value of the control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set initialValue(value: Array<any>)")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the initial value of the control"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get currentRawValue()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<any>")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the current value of the array, regardless of the ",(0,l.kt)("inlineCode",{parentName:"td"},"disabled")," status of its controls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resetValue(value?: any)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value: any")),(0,l.kt)("td",{parentName:"tr",align:null},"Resets the underlying form control, marking it ",(0,l.kt)("inlineCode",{parentName:"td"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"untouched")," and sets the current and initial value to the one provided. If no value argument is provided, sets those values to ",(0,l.kt)("inlineCode",{parentName:"td"},"control.currentValue"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clear(clearFlags?: boolean)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Removes all controls from the array. If ",(0,l.kt)("inlineCode",{parentName:"td"},"clearFlags")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," it also resets the array making it ",(0,l.kt)("inlineCode",{parentName:"td"},"pristine")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"untouched"))))),(0,l.kt)("h2",{id:"formstore"},"FormStore"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FormStore")," extends ",(0,l.kt)("inlineCode",{parentName:"p"},"FormGroup"),". It exposes the following public properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Return type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get isChanged()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if cany of ",(0,l.kt)("inlineCode",{parentName:"td"},"FormStore"),"'s controls or relationships have changed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"set formObject(formObject: FormObject)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the ",(0,l.kt)("inlineCode",{parentName:"td"},"FormObject")," for this ",(0,l.kt)("inlineCode",{parentName:"td"},"FormStore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get formObject()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FormObject")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the underlying ",(0,l.kt)("inlineCode",{parentName:"td"},"FormObject")," instance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get model()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the model which the ",(0,l.kt)("inlineCode",{parentName:"td"},"FormObject")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"FormStore")," were created with")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"save()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Observable<any>")),(0,l.kt)("td",{parentName:"tr",align:null},"Initiates the forms save chain. Calls ",(0,l.kt)("inlineCode",{parentName:"td"},"FormObject"),"s save hooks and ",(0,l.kt)("inlineCode",{parentName:"td"},"FormObject.save()"),". Check ",(0,l.kt)("a",{parentName:"td",href:"/ngx-form-object/docs/next/form-object"},"FormObject")," for more details")))))}u.isMDXComponent=!0}}]);