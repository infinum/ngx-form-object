---
id: migration-guide
title: Migration guide
sidebar_label: Migration guide
---

# Migration guide

## Migration from v8.x.x to v9.x.x

### Saving a form

In the `v8` version, `service.save()` was called automatically.

From the version `v9`, the dependency to services is removed and instead of calling `service.save`, `formObject.save` is called.

The easiest way to migrate from `v8` to `v9` is to create `.save(model)` method in the form object and call `service.save` from there.

### Introducing generics

From the version `v9`, `FormObject` and `FormStore` use generics.

When extending `FormObject` or `FormStore` class model class must be provided. I.e. for `User` model - `FormObject<User>` and `FormStore<User>`.