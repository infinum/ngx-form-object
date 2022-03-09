---
id: base-form-object
title: Base form object
sidebar_label: Base form object
---

Base form object is just an abstraction on top of our other form objects. All other form object will extend base form object. Base form object is optional but it is highly recommended as it simplifies the code by giving us the ability to specify data which can be accessed from all other form objects.

```js
import { FormObject, FormObjectOptions } from 'ngx-form-object';

export class BaseFormObject<T> extends FormObject<T> {
  constructor(
    public model: T,
    protected options: FormObjectOptions
  ) {
    super(model, options);
  }
}

```
