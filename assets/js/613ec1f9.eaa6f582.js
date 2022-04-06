"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[583],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(t),u=o,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1258:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],d={id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},c={unversionedId:"migration-guide",id:"migration-guide",isDocsHomePage:!1,title:"Migration guide",description:"Migration from v8.x.x to v9.x.x",source:"@site/docs/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ngx-form-object/docs/next/migration-guide",version:"current",sidebar_label:"Migration guide",frontMatter:{id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},sidebar:"mainSidebar",previous:{title:"Validating forms",permalink:"/ngx-form-object/docs/next/guides/validating-forms"}},l=[{value:"Migration from v8.x.x to v9.x.x",id:"migration-from-v8xx-to-v9xx",children:[{value:"Saving a form",id:"saving-a-form",children:[]},{value:"Introducing generics",id:"introducing-generics",children:[]},{value:"Method decorators",id:"method-decorators",children:[]}]}],p={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"migration-from-v8xx-to-v9xx"},"Migration from v8.x.x to v9.x.x"),(0,i.kt)("h3",{id:"saving-a-form"},"Saving a form"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"v8")," version, ",(0,i.kt)("inlineCode",{parentName:"p"},"service.save()")," was called automatically."),(0,i.kt)("p",null,"From the version ",(0,i.kt)("inlineCode",{parentName:"p"},"v9"),", the dependency to services is removed and instead of calling ",(0,i.kt)("inlineCode",{parentName:"p"},"service.save"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"formObject.save")," is called."),(0,i.kt)("p",null,"The easiest way to migrate from ",(0,i.kt)("inlineCode",{parentName:"p"},"v8")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"v9")," is to create ",(0,i.kt)("inlineCode",{parentName:"p"},".save(model)")," method in the form object and call ",(0,i.kt)("inlineCode",{parentName:"p"},"service.save")," from there."),(0,i.kt)("h3",{id:"introducing-generics"},"Introducing generics"),(0,i.kt)("p",null,"From the version ",(0,i.kt)("inlineCode",{parentName:"p"},"v9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FormObject")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FormStore")," use generics."),(0,i.kt)("p",null,"When extending ",(0,i.kt)("inlineCode",{parentName:"p"},"FormObject")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FormStore")," class model class must be provided. I.e. for ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," model - ",(0,i.kt)("inlineCode",{parentName:"p"},"FormObject<User>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FormStore<User>"),"."),(0,i.kt)("h3",{id:"method-decorators"},"Method decorators"),(0,i.kt)("p",null,"From the version ",(0,i.kt)("inlineCode",{parentName:"p"},"v9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"build{propertyName}")," is deprecated and decorator ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/next/api-reference/decorators#buildcontrol"},"@BuildControl"),"\nshould be used for building other form structures, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMany")," relationship.\nFrom the version ",(0,i.kt)("inlineCode",{parentName:"p"},"v9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," is deprecated and decorator ",(0,i.kt)("a",{parentName:"p",href:"/ngx-form-object/docs/next/api-reference/decorators#buildrelationshipformobjectpropertyname-string"},"@BuildRelationshipFormObject")," should be used when creating nested form objects for any model properties decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@BelongsTo")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@HasMany")," decorators."))}m.isMDXComponent=!0}}]);