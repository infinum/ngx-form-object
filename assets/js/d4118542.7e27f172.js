"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[534],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3044:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"basic-usage",title:"Basic usage",sidebar_label:"Basic usage"},l={unversionedId:"getting-started/basic-usage",id:"version-9.0.0/getting-started/basic-usage",isDocsHomePage:!1,title:"Basic usage",description:"1. Create a model",source:"@site/versioned_docs/version-9.0.0/getting-started/basic-usage.md",sourceDirName:"getting-started",slug:"/getting-started/basic-usage",permalink:"/ngx-form-object/docs/getting-started/basic-usage",version:"9.0.0",sidebar_label:"Basic usage",frontMatter:{id:"basic-usage",title:"Basic usage",sidebar_label:"Basic usage"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"Installation",permalink:"/ngx-form-object/docs/getting-started/installation"},next:{title:"FormObject",permalink:"/ngx-form-object/docs/api-reference/form-object"}},c=[{value:"1. Create a model",id:"1-create-a-model",children:[]},{value:"2. Create a form object class",id:"2-create-a-form-object-class",children:[]},{value:"3. Create a form store (form)",id:"3-create-a-form-store-form",children:[]},{value:"4. Map form store to the template",id:"4-map-form-store-to-the-template",children:[]},{value:"5. Implement a saving functionality",id:"5-implement-a-saving-functionality",children:[]}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-create-a-model"},"1. Create a model"),(0,a.kt)("p",null,"The model will be used to populate the form."),(0,a.kt)("p",null,"The model must specify which properties are attribute properties (his own properties), which are belongsTo properties, and which properties are hasMany properties. For those puproses ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BelongsTo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"HasMany")," decorators are provided. ",(0,a.kt)("a",{parentName:"p",href:"../guides/defining-relationship-form-fields"},"Find out more"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.model.ts"',title:'"user.model.ts"'},"import { Attribute, BelongsTo, HasMany } from 'ngx-form-object';\n\nclass User {\n  @Attribute()\n  name: string;\n\n  @BelongsTo()\n  address: Address;\n\n  @HasMany()\n  cars: Array<Car>;\n}\n")),(0,a.kt)("h2",{id:"2-create-a-form-object-class"},"2. Create a form object class"),(0,a.kt)("p",null,"The task of a specific form object is to manage forms of a specific type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"import { FormObject, FormObjectOptions } from 'ngx-form-object';\nimport { User } from './user.model';\n\nexport class UserFormObject extends FormObject<User> {\n  constructor(\n    public model: User,\n    protected options: FormObjectOptions\n  ) {\n    super(model, options);\n  }\n}\n")),(0,a.kt)("h2",{id:"3-create-a-form-store-form"},"3. Create a form store (form)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," is created out of the model. To create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," out of that ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject"),", inject or instatiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder")," in your component/service.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder.create")," to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const user: User = new User();\nconst userFormObject: UserFormObject = new UserFormObject(user, null);\nconst formObjectBuilder: FormObjectBuidler = new FormObjectBuilder();\nconst userForm: FormStore<User> = this.formObjectBuilder.create(userFormObject);\n")),(0,a.kt)("h2",{id:"4-map-form-store-to-the-template"},"4. Map form store to the template"),(0,a.kt)("p",null,"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactiveFormsModule")," to the parent module.\nForm store can be used in a template in the same way as any other form created by Angular's ",(0,a.kt)("inlineCode",{parentName:"p"},"FormBuilder"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form [formGroup]="userForm">\n  <input formControlName="name" />\n</form>\n')),(0,a.kt)("h2",{id:"5-implement-a-saving-functionality"},"5. Implement a saving functionality"),(0,a.kt)("p",null,"To save the form (model), ",(0,a.kt)("inlineCode",{parentName:"p"},".save()")," on a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instance should be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"userForm.save();\n")),(0,a.kt)("p",null,"In the background, ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeSave"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"save"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterSave")," hooks from FormObject are called. Out of those three, only the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," function is mandatory (unless the saving functionality is not used)."))}p.isMDXComponent=!0}}]);