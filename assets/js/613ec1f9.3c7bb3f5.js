"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[583],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),s=i,f=u["".concat(l,".").concat(s)]||u[s]||m[s]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1258:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},l={unversionedId:"migration-guide",id:"migration-guide",isDocsHomePage:!1,title:"Migration guide",description:"Migration from v8.x.x to v9.x.x",source:"@site/docs/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ngx-form-object/docs/next/migration-guide",version:"current",sidebar_label:"Migration guide",frontMatter:{id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},sidebar:"mainSidebar",previous:{title:"Validating forms",permalink:"/ngx-form-object/docs/next/guides/validating-forms"}},p=[{value:"Migration from v8.x.x to v9.x.x",id:"migration-from-v8xx-to-v9xx",children:[{value:"Saving a form",id:"saving-a-form",children:[]},{value:"Introducing generics",id:"introducing-generics",children:[]}]}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"migration-from-v8xx-to-v9xx"},"Migration from v8.x.x to v9.x.x"),(0,o.kt)("h3",{id:"saving-a-form"},"Saving a form"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," version, ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save()")," was called automatically."),(0,o.kt)("p",null,"From the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),", the dependency to services is removed and instead of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"formObject.save")," is called."),(0,o.kt)("p",null,"The easiest way to migrate from ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v9")," is to create ",(0,o.kt)("inlineCode",{parentName:"p"},".save(model)")," method in the form object and call ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save")," from there."),(0,o.kt)("h3",{id:"introducing-generics"},"Introducing generics"),(0,o.kt)("p",null,"From the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore")," use generics."),(0,o.kt)("p",null,"When extending ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore")," class model class must be provided. I.e. for ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model - ",(0,o.kt)("inlineCode",{parentName:"p"},"FormObject<User>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FormStore<User>"),"."))}m.isMDXComponent=!0}}]);