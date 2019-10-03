import { Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormModel, FormObject, FormObjectOptions } from 'ngx-form-object';
import { UserService } from '../services/user/user.service';

export class UserFormObject extends FormObject {
  public serviceMappings = {
    User: this.injector.get(UserService),
  };

  public validators = {
    name: [Validators.required],
  };

  constructor(
    public model: FormModel,
    protected options: FormObjectOptions,
    public injector: Injector,
  ) {
    super(model, options);
  }
}
