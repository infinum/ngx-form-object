"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[435],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9766:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],p={id:"decorators",title:"Decorators",sidebar_label:"Decorators"},c={unversionedId:"api-reference/decorators",id:"api-reference/decorators",isDocsHomePage:!1,title:"Decorators",description:"Model decorators",source:"@site/docs/api-reference/decorators.md",sourceDirName:"api-reference",slug:"/api-reference/decorators",permalink:"/ngx-form-object/docs/next/api-reference/decorators",version:"current",sidebar_label:"Decorators",frontMatter:{id:"decorators",title:"Decorators",sidebar_label:"Decorators"},sidebar:"mainSidebar",previous:{title:"FormObject",permalink:"/ngx-form-object/docs/next/api-reference/form-object"},next:{title:"ExtendedFormControl",permalink:"/ngx-form-object/docs/next/api-reference/extended-form-controls/extended-form-control"}},s=[{value:"Model decorators",id:"model-decorators",children:[{value:"@Attribute()",id:"attribute",children:[]},{value:"@BelongsTo(options: PropertyOptions)",id:"belongstooptions-propertyoptions",children:[]},{value:"@HasMany(options: PropertyOptions)",id:"hasmanyoptions-propertyoptions",children:[]},{value:"PropertyOptions",id:"propertyoptions",children:[]}]},{value:"Method decorators",id:"method-decorators",children:[{value:"@BuildControl(propertyName: string)",id:"buildcontrolpropertyname-string",children:[]},{value:"@BuildRelationshipFormObject(propertyName: string)",id:"buildrelationshipformobjectpropertyname-string",children:[]}]}],l={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"model-decorators"},"Model decorators"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," exposes three model decorators: ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BelongsTo()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMany()"),".\nThese decorators are used for specifying what kind of form controls should be created for different model properties."),(0,i.kt)("h3",{id:"attribute"},"@Attribute()"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl"),"s will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute(options: PropertyOptions)")," decorator. See ",(0,i.kt)("a",{parentName:"p",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options"),(0,i.kt)("h3",{id:"belongstooptions-propertyoptions"},"@BelongsTo(options: PropertyOptions)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl"),"s will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"BelongsTo(options: PropertyOptions)")," decorator. See ",(0,i.kt)("a",{parentName:"p",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options"),(0,i.kt)("h3",{id:"hasmanyoptions-propertyoptions"},"@HasMany(options: PropertyOptions)"),(0,i.kt)("p",null,"Empty ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMany(options: PropertyOptions)")," decorator. See ",(0,i.kt)("a",{parentName:"p",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options"),(0,i.kt)("h3",{id:"propertyoptions"},"PropertyOptions"),(0,i.kt)("p",null,"Each of the decorators accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyOptions")," optional argument."),(0,i.kt)("p",null,"A custom ",(0,i.kt)("inlineCode",{parentName:"p"},"isChanged(initialValue: any, currentValue: any): boolean")," function can be defined in the options argument. If defined, this function overrides the default ",(0,i.kt)("inlineCode",{parentName:"p"},"isChanged")," behavior for that attribute."),(0,i.kt)("p",null,"You can override default control types in ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/next/api-reference/form-object"},"FormObject"),"."),(0,i.kt)("h2",{id:"method-decorators"},"Method decorators"),(0,i.kt)("h3",{id:"buildcontrolpropertyname-string"},"@BuildControl(propertyName: string)"),(0,i.kt)("p",null,"Requires relationship ",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName")," as an argument which must be equal to the property name defined in the model. Can be used for creating custom relationship forms. ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/next/guides/creating-complex-forms#creating-custom-relationship-forms"},"Find out more"),"."),(0,i.kt)("h3",{id:"buildrelationshipformobjectpropertyname-string"},"@BuildRelationshipFormObject(propertyName: string)"),(0,i.kt)("p",null,"Requires relationship ",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName")," as an argument which must be equal to the property name defined in the model. Can be used for creating complex relationship structures. ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/next/guides/creating-complex-forms#creating-complex-relationship-structures"},"Find out more"),"."))}d.isMDXComponent=!0}}]);