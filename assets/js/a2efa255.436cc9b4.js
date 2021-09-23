"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[653],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},l={unversionedId:"getting-started",id:"version-8.x.x/getting-started",isDocsHomePage:!1,title:"NgxFormObject",description:"ngx-form-object is an abstraction on top of Angular's reactive forms. It generates a form from a given model and automatically handles creation of nested forms (HasOne and HasMany model relationships).",source:"@site/versioned_docs/version-8.x.x/getting-started.md",sourceDirName:".",slug:"/",permalink:"/ngx-form-object/docs/8.x.x/",editUrl:"https://github.com/infinum/ngx-form-object/versioned_docs/version-8.x.x/getting-started.md",version:"8.x.x",sidebar_label:"Getting started",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},sidebar:"version-8.x.x/mainSidebar",next:{title:"FormObject",permalink:"/ngx-form-object/docs/8.x.x/form-object"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Basic usage",id:"basic-usage",children:[{value:"user.service.ts",id:"userservicets",children:[]}]},{value:"API reference",id:"api-reference",children:[]},{value:"Guides",id:"guides",children:[]},{value:"License",id:"license",children:[]},{value:"Credits",id:"credits",children:[]}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ngx-form-object is an abstraction on top of Angular's reactive forms. It generates a form from a given model and automatically handles creation of nested forms (HasOne and HasMany model relationships)."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h4",{id:"npm"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ngx-form-object --save\n")),(0,a.kt)("h4",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add ngx-form-object\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,a.kt)("h4",{id:"1-import-ngxformobjectmodule"},"1. Import ",(0,a.kt)("inlineCode",{parentName:"h4"},"NgxFormObjectModule")),(0,a.kt)("p",null,"To start using ",(0,a.kt)("strong",{parentName:"p"},"ngx-form-object")," you have to import ",(0,a.kt)("inlineCode",{parentName:"p"},"NgxFormObjectModule")," into the root module of your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { AppComponent } from './app.component';\nimport { NgxFormObjectModule } from 'ngx-form-object';\n...\n\n@NgModule({\n  declarations: [\n    ...\n  ],\n  imports: [\n    ...\n    NgxFormObjectModule\n    ...\n  ],\n  providers: [\n    ...\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n\n")),(0,a.kt)("h4",{id:"2-create-a-model"},"2. Create a model"),(0,a.kt)("p",null,"The model will be used to populate the form."),(0,a.kt)("p",null,"The model must specify which properties are attribute properties (his own properties), which are belongsTo properties, and which properties are hasMany properties. For those puproses ",(0,a.kt)("inlineCode",{parentName:"p"},"Attribute"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BelongsTo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"HasMany")," decorators are exposed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Attribute, HasMany } from 'ngx-form-object';\n\nclass User {\n  @Attribute()\n  name: string;\n\n  @BelongsTo()\n  department: Department;\n\n  @HasMany()\n  cars: Array<Car>\n}\n")),(0,a.kt)("h4",{id:"3-create-a-form-object-class"},"3. Create a form object class"),(0,a.kt)("p",null,"The task of a specific form object is to manage forms of a specific type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { FormObject, FormObjectOptions } from 'ngx-form-object';\n\nexport class UserFormObject extends FormObject {\n  constructor(\n    public model: User,\n    protected options: FormObjectOptions\n  ) {\n    super(model, options);\n  }\n}\n")),(0,a.kt)("h4",{id:"4-create-a-form-store-form"},"4. Create a form store (form)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FormObject")," is created out of the model. To create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," out of that ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObject"),", inject or instatiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder")," in your component/service.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder.create")," to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const user: User = new User();\nconst userFormObject: UserFormObject = new UserFormObject(user, null);\nconst formObjectBuilder: FormObjectBuidler = new FormObjectBuilder();\nconst userForm: FormStore = this.formObjectBuilder.create(userFormObject);\n")),(0,a.kt)("h4",{id:"5-map-form-store-to-the-template"},"5. Map form store to the template"),(0,a.kt)("p",null,"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactiveFormsModule")," to the parent module.\nForm store can be used in a template in the same way as any other form created by Angular's ",(0,a.kt)("inlineCode",{parentName:"p"},"FormBuilder"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form [formGroup]="userForm">\n  <input formControlName="name" />\n</form>\n')),(0,a.kt)("h4",{id:"6-map-a-service-for-our-model"},"6. Map a service for our model"),(0,a.kt)("p",null,"To save the form (the model), we can simply call ",(0,a.kt)("inlineCode",{parentName:"p"},".save()")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"FormStore")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"userForm.save();\n")),(0,a.kt)("p",null,"This will search for a service responsible for handling with user model. Form object will search for the service in ",(0,a.kt)("inlineCode",{parentName:"p"},"formObject.serviceMappings[key]"),". Key in the serviceMappings object represents the model type (model instance name)."),(0,a.kt)("h4",{id:"userform-objectts"},"user.form-object.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," constructor(\n    public model: User,\n    protected options: FormObjectOptions,\n    private injector: Injector,\n  ) {\n    super(model, options);\n    this.serviceMappings = {\n      User: injector.get(UserService),\n    };\n  }\n")),(0,a.kt)("p",null,"In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"injector")," is used for injecting the service.\nValue in the ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceMappings")," object represents an instance of a service."),(0,a.kt)("p",null,"If a mapped service is found, Form object will call ",(0,a.kt)("inlineCode",{parentName:"p"},"service.save(model)"),". This means that the service you are mapping to the Form object needs to define the save method with the correct signature."),(0,a.kt)("h3",{id:"userservicets"},"user.service.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"public save(model: User): Observable<User> {\n  // Trigger your saving logic and return Observable<User>\n}\n")),(0,a.kt)("h2",{id:"api-reference"},"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/FormObject"},"FormObject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/FormStore"},"FormStore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/FormObjectBuilder"},"FormObjectBuilder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/FormObjectOptions"},"FormObjectOptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/Attribute-decorator"},"@Attribute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/BelongsTo-decorator"},"@BelongsTo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/HasMany-decorator"},"@HasMany"))),(0,a.kt)("h2",{id:"guides"},"Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/infinum/ngx-form-object/wiki/BaseFormObject"},"Using base form object"))),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Licensed under the MIT License - see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/ngx-form-object/blob/master/LICENSE"},"LICENSE")," for details."),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"Maintained and sponsered by ",(0,a.kt)("a",{parentName:"p",href:"https://infinum.com"},"Infinum")," ","\xa9"," 2020"),(0,a.kt)("img",{src:"https://infinum.co/infinum.png",width:"264"}))}p.isMDXComponent=!0}}]);