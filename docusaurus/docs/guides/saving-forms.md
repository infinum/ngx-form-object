---
id: saving-forms
title: Saving forms
sidebar_label: Saving forms
---

`ngx-form-object` provides three hooks that can be utilized to add additional functionalities to a saving process. The hooks will be executed one after another in the following order: `beforeSave`, `save`, `afterSave`. Of this three methods only `save` method is <b>required for saving</b> the form.

### beforeSave()
Implement this method to execute any action before the actual saving is done. `beforeSave` method gets a `FormStore` instance as an argument and it should return an observable of the same `FormStore`.

An example how this hook could  be used is to save model relationships before the original model is saved.
For example, if you set `userForm.value.department` to a new department that does not yet exist in your database, then you  might want to save it before saving the `User` model. `beforeSave` hook could be used to achieve that.

```ts title="user.form-object.ts"
beforeSave(userForm: UserFormStore): Observable<UserFormStore> {
  return userForm.get('department').save().pipe(
    map(() => userForm)
  );
}
```

### save()

`ngx-form-object` handles saving and persisting of the form values. By calling `userForm.save()`, the `save` function on the form object is invoked:

```ts title="user.form-object.ts"
public save(model: User): Observable<User> {
  // Persist your model here
}
```

### afterSave()
Similarly to `beforeSave`, `afterSave` hook can be used to execute any action after the actual saving returned a value.

This method gets a `FormStore` instance as an argument and it should return an observable of the same class.

One example how you could use this hook is to save model relationships after the original model is saved.

```ts title="user.form-object.ts"
afterSave(user: User, userForm: UserFormStore): Observable<User> {
  return userForm.get('department').save().pipe(
    map(() => user)
  );
}
```
