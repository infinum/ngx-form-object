import { Attribute, FormModel } from 'ngx-form-object';

export class User implements FormModel {
  config = null;

  @Attribute()
  name: string;
}
