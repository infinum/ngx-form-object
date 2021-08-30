"use strict";(self.webpackChunkngx_form_object=self.webpackChunkngx_form_object||[]).push([[914],{1986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"form-object",title:"FormObject",sidebar_label:"FormObject"},s={unversionedId:"form-object",id:"form-object",isDocsHomePage:!1,title:"FormObject",description:"FormObject lets you specify the way in which its FormStore relationship controls will be created.",source:"@site/docs/form-object.md",sourceDirName:".",slug:"/form-object",permalink:"/ngx-form-object/docs/form-object",editUrl:"https://github.com/infinum/ngx-form-object/docs/form-object.md",version:"current",sidebar_label:"FormObject",frontMatter:{id:"form-object",title:"FormObject",sidebar_label:"FormObject"},sidebar:"someSidebar",previous:{title:"NgxFormObject",permalink:"/ngx-form-object/docs/"},next:{title:"Decorators",permalink:"/ngx-form-object/docs/decorators"}},m=[{value:"Defining relationship form fields",id:"defining-relationship-form-fields",children:[{value:"Create relationship form fields using create{FieldName}FormObject method",id:"create-relationship-form-fields-using-createfieldnameformobject-method",children:[]}]},{value:"Defining relationship validators",id:"defining-relationship-validators",children:[]},{value:"Defining FormObject validator with <code>FormGroupOptions</code>",id:"defining-formobject-validator-with-formgroupoptions",children:[]},{value:"Saving forms",id:"saving-forms",children:[{value:"Service mapping",id:"service-mapping",children:[]},{value:"Save hooks",id:"save-hooks",children:[]}]}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FormObject lets you specify the way in which its FormStore relationship controls will be created.\nIt also enables you define specific 'save' behaviour by implementing 'beforeSave' and 'afterSave' hooks."),(0,r.kt)("h2",{id:"defining-relationship-form-fields"},"Defining relationship form fields"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FormObjectBuilder")," has a default behaviour for every type of form field relationship:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Attribute")," form field - ",(0,r.kt)("inlineCode",{parentName:"li"},"ExtendedFormControl")," will be created by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BelongsTo")," form field - ",(0,r.kt)("inlineCode",{parentName:"li"},"ExtendedFormControl")," will be created by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HasMany")," form field - An empty ",(0,r.kt)("inlineCode",{parentName:"li"},"ExtendedFormArray")," will be created")),(0,r.kt)("p",null,"If default form fields don't provide you with enough control (e.g. you are manipulating multiple levels of relationships on the same page/form), default behaviour can be overriden by implementing one of the following methods:"),(0,r.kt)("h3",{id:"create-relationship-form-fields-using-createfieldnameformobject-method"},"Create relationship form fields using create{FieldName}FormObject method"),(0,r.kt)("p",null,"If defined, this method will be used when creating a form field for any model relationship decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"BelongsTo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HasMany"),".\nThis method must have a name formatted like ",(0,r.kt)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," and return a ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject")," instance. It receives model and form object options as its arguments."),(0,r.kt)("p",null,"For example you can define the following method for a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"cars")," ",(0,r.kt)("inlineCode",{parentName:"p"},"HasMany")," relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public createCarsFormObject(model: Car, options: FormObjectOptions): CarFormObject {\n  return new CarFormObject(model, options);\n}\n")),(0,r.kt)("p",null,"This will result in ",(0,r.kt)("inlineCode",{parentName:"p"},"userForm.controls.cars")," being an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtendedFormArray")," populated with ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStores"),". These ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStores")," will be created out of ",(0,r.kt)("inlineCode",{parentName:"p"},"CarFormObjects")," that the ",(0,r.kt)("inlineCode",{parentName:"p"},"createCarsFormObject")," method returned."),(0,r.kt)("p",null,"A similar method can be defined for ",(0,r.kt)("inlineCode",{parentName:"p"},"BelongsTo")," relationships. You can define the following method for a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Department")," ",(0,r.kt)("inlineCode",{parentName:"p"},"BelongsTo")," relationship: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"public createDepartmentFormObject(model: Department, options: FormObjectOptions): CarFormObject {\n  return new DepartmentFormObject(model, options);\n}\n")),(0,r.kt)("p",null,"This results in ",(0,r.kt)("inlineCode",{parentName:"p"},"userForm.controls.department")," being a ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStore")," created out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CarFormObject")," instead of it being the default ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtendedFormControl"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"create<FieldName>FormObject")," methods don't have to return specific ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObjects")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"CarFormObject"),"). They can return the more generic ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject")," if that is the level of control you need."))),(0,r.kt)("h2",{id:"defining-relationship-validators"},"Defining relationship validators"),(0,r.kt)("p",null,"You can add relationship validators by defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"validators")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"import { Validators } from '@angular/forms';\n...\n\nvalidators: {\n  name: Validators.required, // User must have a name\n  cars: (carsControl: AbstractControl) => {\n    return carsControl.value?.length >= 1 : null : { error: 'User must have at least 2 cars' };\n  },\n}\n...\n")),(0,r.kt)("p",null,"These validators will be passed to the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cars")," relationship form controls."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Validator object will be used only for ",(0,r.kt)("inlineCode",{parentName:"p"},"Attribute")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HasMany")," relationships. For validating ",(0,r.kt)("inlineCode",{parentName:"p"},"BelongsTo")," relationships, see ",(0,r.kt)("a",{parentName:"p",href:"#defining-formobject-validator-with-formgroupoptions"},"FormGroupOptions"),"."))),(0,r.kt)("h2",{id:"defining-formobject-validator-with-formgroupoptions"},"Defining FormObject validator with ",(0,r.kt)("inlineCode",{parentName:"h2"},"FormGroupOptions")),(0,r.kt)("p",null,"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject")," validators by defining ",(0,r.kt)("inlineCode",{parentName:"p"},"formGroupOptions")," on your ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="interface FormGroupOptions"',title:'"interface','FormGroupOptions"':!0},"export interface FormGroupOptions {\n  validator?: ValidatorFn;\n  asyncValidator?: AsyncValidatorFn;\n}\n")),(0,r.kt)("p",null,"For example the following validator will be set on the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserFormStore"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"   validator: (userForm: UserFormStore) => {\n     // Validate your user form here\n    },\n")),(0,r.kt)("h2",{id:"saving-forms"},"Saving forms"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," to save or persist your form value. By calling ",(0,r.kt)("inlineCode",{parentName:"p"},"userForm.save()"),", the corresponding service's ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," method will automatically be invoked."),(0,r.kt)("h3",{id:"service-mapping"},"Service mapping"),(0,r.kt)("p",null,"Before invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"userForm.save()")," you need to specify which service should be used for this purpose. You can do that by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceMappings")," object in ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object"',title:'"user.form-object"'},"export class UserFormObject extends FormObject {\n   constructor(\n    public model: User,\n    protected options: FormObjectOptions,\n    private injector: Injector,\n  ) {\n    super(model, options);\n    this.serviceMappings = {\n      User: injector.get(UserService),\n    };\n  }\n}\n")),(0,r.kt)("p",null,"The method in your service that ",(0,r.kt)("inlineCode",{parentName:"p"},"FormObject")," will use must be named ",(0,r.kt)("inlineCode",{parentName:"p"},"save"),", must accept the saving model and must return an Observable of the saved model. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.service.ts"',title:'"user.service.ts"'},"public save(model: User): Observable<User> {\n  // Persist your model here\n}\n")),(0,r.kt)("h3",{id:"save-hooks"},"Save hooks"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ngx-form-object")," provides two hooks that you can utilize to add functionality to your form save. These two hooks are ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterSave"),", and they will be executed immediately before and after ",(0,r.kt)("inlineCode",{parentName:"p"},"service.save()")," is called."),(0,r.kt)("h4",{id:"beforesave"},"beforeSave"),(0,r.kt)("p",null,"Implement this method to execute any action before ",(0,r.kt)("inlineCode",{parentName:"p"},"service.save()")," is called. This method accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStore")," as an argument and should return an observable of the same ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStore"),"."),(0,r.kt)("p",null,"One example how you could use this hook is to save model relationships before ",(0,r.kt)("inlineCode",{parentName:"p"},"service.save()")," is called.\nFor example, if you set ",(0,r.kt)("inlineCode",{parentName:"p"},"userForm.value.department")," to a new department that does not yet exist in your database, then you  might want to save it before saving the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," hook to achieve this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'},"beforeSave(userForm: UserFormStore): Observable<UserFormStore> {\n  return userForm.get('department').save().pipe(\n    map((departmentForm: DepartmentFormStore) => {\n      return userForm;\n    })\n  );\n}\n")),(0,r.kt)("h4",{id:"aftersave"},"afterSave"),(0,r.kt)("p",null,"Similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave"),", you can use this hook to execute any action after ",(0,r.kt)("inlineCode",{parentName:"p"},"service.save()")," has returned a value."),(0,r.kt)("p",null,"This method gets a ",(0,r.kt)("inlineCode",{parentName:"p"},"FormStore")," instance as an argument and it should return an observable of the same class."))}p.isMDXComponent=!0}}]);