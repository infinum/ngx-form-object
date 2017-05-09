import { FormObject, FormModel, FormObjectOptions } from 'ngx-form-object';

export class BaseFormObject extends FormObject {
  constructor(
    public model: FormModel,
    protected options: FormObjectOptions
  ) {
    super(model, options);
  }
}
