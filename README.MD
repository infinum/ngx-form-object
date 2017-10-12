# ngx-form-object

Ng-form-object is an abstration on top of Angular's reactive forms.

## Installation

```bash
$ npm install ngx-form-object --save
```

##### app.module.ts
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

## Usage

### 1. Creating a model

The model will be used to populate the form. The model must implement `FormModel` interface.

The model must specify which properties are attribute properties (his own properties), which are belongsTo properties, and which properties are hasMany properties. For those puproses `Attribute`, `BelongsTo`, and `HasMany` decorators are exposed.

i.e.
```js
import { FormModel, Attribute, HasMany } from 'ngx-form-object';

class User implements FormModel {
  @Attribute()
  name: string;

  @BelongsTo()
  test1: Test;

  @HasMany()
  cars: Array<Car>
}
```

### 2. Create a base form object
Base form object is just an abstraction on top of our other form objects. All other form object will extend base form object. Base form object is optional but it is highly recommended as it simplifies the code by giving us the ability to specify data which can be accessed from all other form objects.

i.e.
```js
import { FormObject, FormModel, FormObjectOptions } from 'ngx-form-object';

export class BaseFormObject extends FormObject {
  constructor(
    public model: FormModel,
    protected options: FormObjectOptions
  ) {
    super(model, options);
  }
}

```

### 3. Create a specific form object class
The task of a specific form object is to manage forms of a specific type.

```js
import { BaseFormObject } from 'app/forms/base-form-object/base.form-object';

export class UserFormObject extends BaseFormObject {

}
```

In case base form object doesn't exist, `UserFormObject` can directly extends `FormObject`.


### 4. Create a form store (form)
Form store is created based on belonging form object. Form object is created out of the model.

i.e.
```js
const user: User = new User();
const userFormObject: UserFormObject = new UserFormObject(user, null);
const userForm: FormStore = this.formObjectBuilder.create(userFormObject);
```

### 5. Map form store to the template
As ngx-form-store is an abstraction on top of reactive forms, `ReactiveFormsModule` must be imported.
Form store can be used in a template in the same way as any other form created by Angular's `FormBuilder`.

i.e.
```html
<form [formGroup]="userForm">
  <input formControlName="name" />
</form>
```

### 6. Create a service for our model
To save the form (the model), we can simply call `.save()` on `FormStore` instance.
i.e.
```
userForm.save();
```

This will search for a service responsible for handling with user model. Form object will search for the service in formObject.serviceMappings[key]. `serviceMappings` is an object and can be defined inside base form object, or inside each of form object.

i.e.
#### base.form-object.ts
```js
...
constructor(
  private
) {
  this.serviceMappings = {
    user: injector.get(UserService),
  };
}
```

In this case, `injector` is used for injecting the service.
Key in the serviceMappings object represents the model type (model instance name)
Value in the serviceMappings object represents an instances of a service.

## Form object options

<!-- TODO list all the properties of a form object -->
<!-- TODO list form object parameters -->


## Decorators

### Model decorators

#### Attribute

  * marks a property as an attribute of a model
  * options: none

#### BelongsTo

  * marks a property as a belongs to relationship of a model
  * options: none

#### HasMany

  * marks a property as a has many relationship of a model
  * options: none


## Development

* Ensure you're running Node `>=6.x.x`+ and NPM `>=5.x.x`+

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## TODO

  - [X] Implement Attribute, HasMany, and BelongsTo decorators which define model properties
  - [ ] Improve FormModel interface (some of the properties are required)
  - [ ] Create an interface for service which has to implement .save method
  - [ ] Create interfaces for public methods (i.e., build)
  - [X] Handle errors when saving fails
  - [ ] Setup testing process
  - [ ] Add more tests
  - [ ] Add an example with belongsTo relationship to demoApp
  - [ ] Add tests for demoApp
  - [ ] Change blacklisted properties with virtual attributes

## Author ##

* [Mihael Šafarić](http://github.com/safo6m)

## Want to help? ##

Contributors welcome.

## Legal ##

[Infinum LTD](http://infinum.co) &copy; 2017

[@infinumco](http://twitter.com/infinumco)

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
