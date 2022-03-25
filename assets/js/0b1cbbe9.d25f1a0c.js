"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[237],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5781:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],p={id:"decorators",title:"Decorators",sidebar_label:"Decorators"},l={unversionedId:"api-reference/decorators",id:"version-9.0.0/api-reference/decorators",isDocsHomePage:!1,title:"Decorators",description:"ngx-form-object exposes three decorators: Attribute(), BelongsTo(), and HasMany().",source:"@site/versioned_docs/version-9.0.0/api-reference/decorators.md",sourceDirName:"api-reference",slug:"/api-reference/decorators",permalink:"/ngx-form-object/docs/api-reference/decorators",version:"9.0.0",sidebar_label:"Decorators",frontMatter:{id:"decorators",title:"Decorators",sidebar_label:"Decorators"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"FormObject",permalink:"/ngx-form-object/docs/api-reference/form-object"},next:{title:"ExtendedFormControl",permalink:"/ngx-form-object/docs/api-reference/extended-form-controls/extended-form-control"}},c=[{value:"Attribute()",id:"attribute",children:[]},{value:"BelongsTo(options: PropertyOptions)",id:"belongstooptions-propertyoptions",children:[]},{value:"HasMany(options: PropertyOptions)",id:"hasmanyoptions-propertyoptions",children:[]},{value:"PropertyOptions",id:"propertyoptions",children:[]}],s={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," exposes three decorators: ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BelongsTo()"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMany()"),".\nYou can use one of these decorators to specify what kind of form controls should ",(0,i.kt)("inlineCode",{parentName:"p"},"FormObjectbuilder")," create for different model properties."),(0,i.kt)("h2",{id:"attribute"},"Attribute()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExtendedFormControl"),"s will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Attribute(options: PropertyOptions)")," decorator."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options")),(0,i.kt)("h2",{id:"belongstooptions-propertyoptions"},"BelongsTo(options: PropertyOptions)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExtendedFormControl"),"s will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"BelongsTo(options: PropertyOptions)")," decorator."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options")),(0,i.kt)("h2",{id:"hasmanyoptions-propertyoptions"},"HasMany(options: PropertyOptions)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Empty ",(0,i.kt)("inlineCode",{parentName:"li"},"ExtendedFormArray")," will be created for model properties decorated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"HasMany(options: PropertyOptions)")," decorator."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"#propertyoptions"},"PropertyOptions")," for more information about the decorator options")),(0,i.kt)("h2",{id:"propertyoptions"},"PropertyOptions"),(0,i.kt)("p",null,"Each of the decorators accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyOptions")," optional argument."),(0,i.kt)("p",null,"A custom ",(0,i.kt)("inlineCode",{parentName:"p"},"isChanged(initialValue: any, currentValue: any): boolean")," function can be defined in the options argument. If defined, this function overrides the default ",(0,i.kt)("inlineCode",{parentName:"p"},"isChanged")," behavior for that attribute."),(0,i.kt)("p",null,"You can override default control types in ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/api-reference/form-object"},"FormObject"),"."))}d.isMDXComponent=!0}}]);