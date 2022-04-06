"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[135],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"creating-complex-forms",title:"Creating complex forms",sidebar_label:"Creating complex forms"},s={unversionedId:"guides/creating-complex-forms",id:"guides/creating-complex-forms",isDocsHomePage:!1,title:"Creating complex forms",description:"ngx-form-object exposes two methods for modifying form creation. Both can be used for creating complex relationship structures.",source:"@site/docs/guides/creating-complex-forms.md",sourceDirName:"guides",slug:"/guides/creating-complex-forms",permalink:"/ngx-form-object/docs/next/guides/creating-complex-forms",version:"current",sidebar_label:"Creating complex forms",frontMatter:{id:"creating-complex-forms",title:"Creating complex forms",sidebar_label:"Creating complex forms"},sidebar:"mainSidebar",previous:{title:"Base form object",permalink:"/ngx-form-object/docs/next/guides/base-form-object"},next:{title:"Defining relationship form fields",permalink:"/ngx-form-object/docs/next/guides/defining-relationship-form-fields"}},m=[{value:"Creating complex relationship structures",id:"creating-complex-relationship-structures",children:[{value:"Example 1: Create complex form structure for <code>BelongsTo</code> relationship",id:"example-1-create-complex-form-structure-for-belongsto-relationship",children:[]},{value:"Example 2: Create complex form structure for <code>HasMany</code> relationship",id:"example-2-create-complex-form-structure-for-hasmany-relationship",children:[]}]},{value:"Creating custom relationship forms",id:"creating-custom-relationship-forms",children:[]}],p={toc:m};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," exposes two methods for modifying form creation. Both can be used for creating complex relationship structures."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," should be used to define a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," by which ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," filled with ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instances will be created."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build{propertyName}")," should be used for building other form structures, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"HasMany")," relationship."),(0,a.kt)("h2",{id:"creating-complex-relationship-structures"},"Creating complex relationship structures"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," for creating nested forms. For example, two related models could be defined as follows:"),(0,a.kt)("h3",{id:"example-1-create-complex-form-structure-for-belongsto-relationship"},"Example 1: Create complex form structure for ",(0,a.kt)("inlineCode",{parentName:"h3"},"BelongsTo")," relationship"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.model.ts"',title:'"user.model.ts"'},"import { BelongsTo } from 'ngx-form-object';\n\nclass User {\n  @BelongsTo()\n  address: Address;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="address.model.ts"',title:'"address.model.ts"'},"import { Attribute } from 'ngx-form-object';\n\nclass Address {\n  @Attribute()\n  street: string;\n}\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('address')")," will be created as ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Address")," model set as a value."),(0,a.kt)("p",null,"In order to have a nested form and to be able to edit ",(0,a.kt)("inlineCode",{parentName:"p"},"street")," property, ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('address')")," should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormGroup")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore"),") containing ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFromControl")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"street")," form field."),(0,a.kt)("p",null,"To achive that, a corresponding create method has to be implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"UserFormObject"),". This method must have a name formatted like ",(0,a.kt)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," and return a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," instance. It receives a model and form object options as its arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public createAddressFormObject(model: Address, options: FormObjectOptions): AddressFormObject {\n  return new AddressFormObject(model, options);\n}\n")),(0,a.kt)("p",null,"This results in ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('address')")," being a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," created out of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddressFormObject"),". The created form store contains ",(0,a.kt)("inlineCode",{parentName:"p"},"street")," property as ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl"),"."),(0,a.kt)("h3",{id:"example-2-create-complex-form-structure-for-hasmany-relationship"},"Example 2: Create complex form structure for ",(0,a.kt)("inlineCode",{parentName:"h3"},"HasMany")," relationship"),(0,a.kt)("p",null,"A similar method can be defined for ",(0,a.kt)("inlineCode",{parentName:"p"},"HasMany")," relationships. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.model.ts"',title:'"user.model.ts"'},"import { HasMany } from 'ngx-form-object';\n\nclass User {\n  @HasMany()\n  cars: Array<Car>;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="car.model.ts"',title:'"car.model.ts"'},"import { Attribute } from 'ngx-form-object';\n\nclass Car {\n  @Attribute()\n  color: string;\n}\n")),(0,a.kt)("p",null,"Create method is then implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"UserFormObject"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public createCarsFormObject(model: Car, options: FormObjectOptions): CarFormObject {\n  return new CarFormObject(model, options);\n}\n")),(0,a.kt)("p",null,"For each ",(0,a.kt)("inlineCode",{parentName:"p"},"Car")," model, ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," will be created with ",(0,a.kt)("inlineCode",{parentName:"p"},"CarFormObjects")," returned by this method. This will result in ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('cars')")," being an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," populated with this ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStores"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"create<FieldName>FormObject")," methods don't have to return specific ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObjects")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"CarFormObject"),"). They can return the more generic ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," if that is the level of control you need."))),(0,a.kt)("h2",{id:"creating-custom-relationship-forms"},"Creating custom relationship forms"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"build{propertyName}")," for creating custom relationship forms. This metod should return an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instance. It receives property value as its argument."),(0,a.kt)("p",null,"For example, use ",(0,a.kt)("inlineCode",{parentName:"p"},"buildCars")," to create cars form field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public buildCars(cars: Array<Car>): ExtendedFormArray {\n  return new ExtendedFormArray(\n    cars.map((car) => {\n      return this.carService.createCarFormGroup();;\n    });\n  );\n}\n")),(0,a.kt)("p",null,"This will result in ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('cars')")," being an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," populated with forms created in the service."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Depending on a use case, ",(0,a.kt)("inlineCode",{parentName:"p"},"car")," forms may be ",(0,a.kt)("inlineCode",{parentName:"p"},"FormGroup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore<Car>")," or even a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"FormControl"),". For creation of ",(0,a.kt)("inlineCode",{parentName:"p"},"FormArray")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instances rather use ",(0,a.kt)("a",{parentName:"p",href:"#creating-complex-relationship-structures"},"create method override"),"."))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," method is also useful for defining type of a form field. For example, create ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," instead of default ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFromArray")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"HasMany")," relationships."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public buildCars(cars: Array<Car>): ExtendedFormControl {\n  return new ExtendedFormControl(cars);\n}\n")),(0,a.kt)("p",null,"This will result in ",(0,a.kt)("inlineCode",{parentName:"p"},"userForm.get('cars')")," being an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," with value set to array of ",(0,a.kt)("inlineCode",{parentName:"p"},"Car")," models."))}c.isMDXComponent=!0}}]);