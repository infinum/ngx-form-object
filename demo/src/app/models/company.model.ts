import { FormModel } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';

export class Company extends SimpleModel implements FormModel {
  attributeProperties: Array<string> = ['name'];
  hasManyProperties: Array<string> = [];
  belongsToProperties: Array<string> = [];

  name: string;
}
