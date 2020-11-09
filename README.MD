# NgxFormObject

ngx-form-object is an abstraction on top of Angular's reactive forms. It generates a form from a given model and automatically handles creation of nested forms (HasOne and HasMany model relationships).

## Installation

#### NPM

```bash
npm install ngx-form-object --save
```

#### Yarn

```bash
yarn add ngx-form-object
```

## Basic usage

#### 1. Import `NgxFormObjectModule`
To start using **ngx-form-object** you have to import `NgxFormObjectModule` into root module of your project.

```js
...
import { AppComponent } from './app.component';
import { NgxFormObjectModule } from 'ngx-form-object';
...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxFormObjectModule
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 2. Create a model

The model will be used to populate the form.

The model must specify which properties are attribute properties (his own properties), which are belongsTo properties, and which properties are hasMany properties. For those puproses `Attribute`, `BelongsTo`, and `HasMany` decorators are exposed.

```js
import { Attribute, HasMany } from 'ngx-form-object';

class User {
  @Attribute()
  name: string;

  @BelongsTo()
  department: Department;

  @HasMany()
  cars: Array<Car>
}
```

#### 3. Create a form object class

The task of a specific form object is to manage forms of a specific type.

```js
import { FormObject, FormObjectOptions } from 'ngx-form-object';

export class UserFormObject extends FormObject {
  constructor(
    public model: User,
    protected options: Form
  ) {
    super(model, options);
  }
}
```


#### 4. Create a form store (form)
Form store is created based on the belonging form object. Form object is created out of the model.

```js
const user: User = new User();
const userFormObject: UserFormObject = new UserFormObject(user, null);
const userForm: FormStore = this.formObjectBuilder.create(userFormObject);
```

#### 5. Map form store to the template
Import `ReactiveFormsModule` to the parent module.
Form store can be used in a template in the same way as any other form created by Angular's `FormBuilder`.

```html
<form [formGroup]="userForm">
  <input formControlName="name" />
</form>
```

#### 6. Map a service for our model
To save the form (the model), we can simply call `.save()` on `FormStore` instance.
```
userForm.save();
```

This will search for a service responsible for handling with user model. Form object will search for the service in `formObject.serviceMappings[key]`. Key in the serviceMappings object represents the model type (model instance name).


#### user.form-object.ts
```js
constructor(
  ...,
  private injector: Injector,
) {
  ...

  this.serviceMappings = {
    User: injector.get(UserService),
  };
}
```

In this case, `injector` is used for injecting the service.
Value in the serviceMappings object represents an instance of a service.

## API reference

* [FormObject](https://github.com/infinum/ngx-form-object/wiki/FormObject)
* [FormStore](https://github.com/infinum/ngx-form-object/wiki/FormStore)
* [FormObjectBuilder](https://github.com/infinum/ngx-form-object/wiki/FormObjectBuilder)
* [FormObjectOptions](https://github.com/infinum/ngx-form-object/wiki/FormObjectOptions)
* [@Attribute](https://github.com/infinum/ngx-form-object/wiki/Attribute-decorator)
* [@BelongsTo](https://github.com/infinum/ngx-form-object/wiki/BelongsTo-decorator)
* [@HasMany](https://github.com/infinum/ngx-form-object/wiki/HasMany-decorator)

## Guides

* [Using base form object](https://github.com/infinum/ngx-form-object/wiki/BaseFormObject)

## Author ##

* [Mihael Šafarić](http://github.com/safo6m)

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) for details.

## Credits ##

Maintained and sponsered by [Infinum](https://infinum.com) &copy; 2020

<img src="https://infinum.co/infinum.png" width="264">
