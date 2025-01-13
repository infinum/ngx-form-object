"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(r),c=a,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={id:"saving-forms",title:"Saving forms",sidebar_label:"Saving forms"},i=void 0,s={unversionedId:"guides/saving-forms",id:"version-9.0.0/guides/saving-forms",title:"Saving forms",description:"Saving process is initiated by calling save method on a FormStore - userFormStore.save().",source:"@site/versioned_docs/version-9.0.0/guides/saving-forms.md",sourceDirName:"guides",slug:"/guides/saving-forms",permalink:"/ngx-form-object/docs/guides/saving-forms",draft:!1,tags:[],version:"9.0.0",frontMatter:{id:"saving-forms",title:"Saving forms",sidebar_label:"Saving forms"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"Defining relationship form fields",permalink:"/ngx-form-object/docs/guides/defining-relationship-form-fields"},next:{title:"Validating forms",permalink:"/ngx-form-object/docs/guides/validating-forms"}},l={},m=[{value:"beforeSave()",id:"beforesave",level:3},{value:"save()",id:"save",level:3},{value:"afterSave()",id:"aftersave",level:3}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Saving process is initiated by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method on a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"userFormStore.save()"),"."),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method on a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," is invoked three ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," hooks will be executed one after another in the following order: ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeSave"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"save"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"afterSave"),"."),(0,a.kt)("p",null,"This three hooks that can be utilized to add additional functionalities to a saving process. Of this three methods only ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method is ",(0,a.kt)("b",null,"required for saving")," the form."),(0,a.kt)("h3",{id:"beforesave"},"beforeSave()"),(0,a.kt)("p",null,"Implement this method to execute any action before the actual saving is done. ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeSave")," method gets a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instance as an argument and it should return an observable of the same ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore"),"."),(0,a.kt)("p",null,"An example how this hook could  be used is to save model relationships before the original model is saved.\nFor example, if ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.value.address")," is set to a new address that does not yet exist in the database, then it might be useful to save it before saving the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model. ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeSave")," hook could be used to achieve that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"beforeSave(userForm: UserFormStore): Observable<UserFormStore> {\n  return userForm.get('address').save().pipe(\n    map(() => userForm)\n  );\n}\n")),(0,a.kt)("h3",{id:"save"},"save()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," handles saving and persisting of the form values. To persist model values implement ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public save(model: User): Observable<User> {\n  // Persist your model here\n}\n")),(0,a.kt)("h3",{id:"aftersave"},"afterSave()"),(0,a.kt)("p",null,"Similarly to ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeSave"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"afterSave")," hook can be used to execute any action after the actual saving returned a response."),(0,a.kt)("p",null,"This method gets a ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instance as an argument and it should return an observable of the ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),"."),(0,a.kt)("p",null,"An example how this hook could be used is to save model relationships after the original model is saved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"afterSave(user: User, userForm: UserFormStore): Observable<User> {\n  return userForm.get('address').save().pipe(\n    map(() => user)\n  );\n}\n")))}d.isMDXComponent=!0}}]);