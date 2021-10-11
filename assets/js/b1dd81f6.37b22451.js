"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[94],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(r),s=i,f=p["".concat(l,".").concat(s)]||p[s]||d[s]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8361:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},l={unversionedId:"migration-guide",id:"version-9.0.0/migration-guide",isDocsHomePage:!1,title:"Migration guide",description:"Migration from v8.x.x to v9.x.x",source:"@site/versioned_docs/version-9.0.0/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ngx-form-object/docs/migration-guide",editUrl:"https://github.com/infinum/ngx-form-object/versioned_docs/version-9.0.0/migration-guide.md",version:"9.0.0",sidebar_label:"Migration guide",frontMatter:{id:"migration-guide",title:"Migration guide",sidebar_label:"Migration guide"},sidebar:"version-9.0.0/mainSidebar",previous:{title:"Extended form controls",permalink:"/ngx-form-object/docs/extended-form-controls"}},u=[{value:"Migration from v8.x.x to v9.x.x",id:"migration-from-v8xx-to-v9xx",children:[{value:"Saving a form",id:"saving-a-form",children:[]}]}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"migration-from-v8xx-to-v9xx"},"Migration from v8.x.x to v9.x.x"),(0,o.kt)("h3",{id:"saving-a-form"},"Saving a form"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," version, ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save()")," was called automatically."),(0,o.kt)("p",null,"From the version ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),", the dependency to services is removed and instead of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"formObject.save")," is called."),(0,o.kt)("p",null,"The easiest way to migrate from ",(0,o.kt)("inlineCode",{parentName:"p"},"v8")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"v9")," is to create ",(0,o.kt)("inlineCode",{parentName:"p"},".save(model)")," method in the form object and call ",(0,o.kt)("inlineCode",{parentName:"p"},"service.save")," from there."))}d.isMDXComponent=!0}}]);