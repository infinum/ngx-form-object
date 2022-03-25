---
id: saving-forms
title: Saving forms
sidebar_label: Saving forms
---

Saving process is initiated by calling `save` method on a `FormStore` - `userFormStore.save()`.

When `save` method on a `FormStore` is invoked three `FormObject` hooks will be executed one after another in the following order: `beforeSave`, `save`, `afterSave`.

This three hooks that can be utilized to add additional functionalities to a saving process. Of this three methods only `save` method is <b>required for saving</b> the form.

### beforeSave()

Implement this method to execute any action before the actual saving is done. `beforeSave` method gets a `FormStore` instance as an argument and it should return an observable of the same `FormStore`.

An example how this hook could  be used is to save model relationships before the original model is saved.
For example, if `userForm.value.address` is set to a new address that does not yet exist in the database, then it might be useful to save it before saving the `User` model. `beforeSave` hook could be used to achieve that.

```ts title="user.form-object.ts"
beforeSave(userForm: UserFormStore): Observable<UserFormStore> {
  return userForm.get('address').save().pipe(
    map(() => userForm)
  );
}
```

### save()

`ngx-form-object` handles saving and persisting of the form values. To persist model values implement `save` method.

```ts title="user.form-object.ts"
public save(model: User): Observable<User> {
  // Persist your model here
}
```

### afterSave()
Similarly to `beforeSave`, `afterSave` hook can be used to execute any action after the actual saving returned a response.

This method gets a `model` and `FormStore` instance as an argument and it should return an observable of the `model`.

An example how this hook could be used is to save model relationships after the original model is saved.

```ts title="user.form-object.ts"
afterSave(user: User, userForm: UserFormStore): Observable<User> {
  return userForm.get('address').save().pipe(
    map(() => user)
  );
}
```
