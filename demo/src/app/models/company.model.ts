import { FormModel, Attribute } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';

export class Company extends SimpleModel implements FormModel {
  config = null;

  @Attribute()
  name: string;
}
