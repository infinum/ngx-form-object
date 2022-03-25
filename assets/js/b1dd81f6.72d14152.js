"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[94],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return s}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=i,f=u["".concat(l,".").concat(s)]||u[s]||m[s]||o;return r?t.createElement(f,a(a({ref:n},d),{},{components:r})):t.createElement(f,a({ref:n},d))}));function s(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8361:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},l={unversionedId:"migration-guide",id:"version-9.0.0/migration-guide",isDocsHomePage:!1,title:"Migration guide",description:"Migration from v8.x.x to v9.x.x",source:"@site/versioned_docs/version-9.0.0/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ngx-form-object/docs/migration-guide",version:"9.0.0",sidebar_label:"Migration guide",frontMatter:{id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"Validating forms",permalink:"/ngx-form-object/docs/guides/validating-forms"}},p=[{value:"Migration from v8.x.x to v9.x.x",id:"migration-from-v8xx-to-v9xx",children:[{value:"Saving a form",id:"saving-a-form",children:[]},{value:"Introducing generics",id:"introducing-generics",children:[]}]}],d={toc:p};function m(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"migration-from-v8xx-to-v9xx"},"Migration from v8.x.x to v9.x.x"),(0,o.kt)("h3",{id:"saving-a-form"},"Saving a form"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," version, ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save()")," was called automatically."),(0,o.kt)("p",null,"From the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),", the dependency to services is removed and instead of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"formObject.save")," is called."),(0,o.kt)("p",null,"The easiest way to migrate from ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v9")," is to create ",(0,o.kt)("inlineCode",{parentName:"p"},".save(model)")," method in the form object and call ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save")," from there."),(0,o.kt)("h3",{id:"introducing-generics"},"Introducing generics"),(0,o.kt)("p",null,"From the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore")," use generics."),(0,o.kt)("p",null,"When extending ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore")," class model class must be provided. I.e. for ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model - ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject<User>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore<User>"),"."))}m.isMDXComponent=!0}}]);