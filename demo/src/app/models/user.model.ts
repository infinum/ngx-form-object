import { FormModel } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';

export class User extends SimpleModel implements FormModel {
  attributeProperties: Array<string> = ['firstName', 'lastName'];
  hasManyProperties: Array<string> = [];
  belongsToProperties: Array<string> = [];

  firstName: string;
  lastName: string;
}
