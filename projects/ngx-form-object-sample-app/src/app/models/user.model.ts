import { Attribute } from 'ngx-form-object';

export class User {
  config = null;

  @Attribute()
  name: string;
}
