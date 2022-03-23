---
id: basic-usage
title: Basic usage
sidebar_label: Basic usage
---

## 1. Create a model

The model will be used to populate the form.

The model must specify which properties are attribute properties (his own properties), which are belongsTo properties, and which properties are hasMany properties. For those puproses `Attribute`, `BelongsTo`, and `HasMany` decorators are exposed.

```js
import { Attribute, BelongsTo, HasMany } from 'ngx-form-object';

class User {
  @Attribute()
  name: string;

  @BelongsTo()
  department: Department;

  @HasMany()
  cars: Array<Car>;
}
```

## 2. Create a form object class

The task of a specific form object is to manage forms of a specific type.

```js
import { FormObject, FormObjectOptions } from 'ngx-form-object';
import { User } from './user.model';

export class UserFormObject extends FormObject<User> {
  constructor(
    public model: User,
    protected options: FormObjectOptions
  ) {
    super(model, options);
  }
}
```

## 3. Create a form store (form)
`FormObject` is created out of the model. To create a `FormStore` out of that `FormObject`, inject or instatiate a `FormObjectBuilder` in your component/service.
Use `FormObjectBuilder.create` to create the `FormStore`.

```js
const user: User = new User();
const userFormObject: UserFormObject = new UserFormObject(user, null);
const formObjectBuilder: FormObjectBuidler = new FormObjectBuilder();
const userForm: FormStore<User> = this.formObjectBuilder.create(userFormObject);
```

## 4. Map form store to the template
Import `ReactiveFormsModule` to the parent module.
Form store can be used in a template in the same way as any other form created by Angular's `FormBuilder`.

```html
<form [formGroup]="userForm">
  <input formControlName="name" />
</form>
```

## 5. Implement a saving functionality

To save the form (model), `.save()` on a `FormStore` instance should be used.
```
userForm.save();
```

In the background, `beforeSave`, `save`, and `afterSave` hooks from FormObject are called. Out of those three, only the `save` function is mandatory (unless the saving functionality is not used).
