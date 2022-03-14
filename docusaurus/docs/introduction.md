---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---
# NgxFormObject

## What is ngx-form-object?

`ngx-form-object` is an abstraction on top of Angular's reactive forms. It generates a form from given `model` and automatically handles creation of nested forms, ie. `HasOne` and `HasMany` model relationships.

## Benefits of using ngx-form-object

### Form (re)creation

`ngx-form-object` simplifies form creation and manipulation. Once `FormObject` is defined for a given `model` it can be reused across the application to create a single or multiple identical forms without code duplication.

### Gathering validators

All validators for a single model can be listed inside `FormObject` instead of defining them in various components across the application.

### Unify model saving

Ensure that same procedure is executed each time when saving a model by using `beforeSave` and `afterSave` hooks.
