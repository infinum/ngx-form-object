import { FormModel } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';
import { User } from 'app/models/user.model';

export class Car extends SimpleModel implements FormModel {
  attributeProperties: Array<string> = ['name', 'color'];
  hasManyProperties: Array<string> = [];
  belongsToProperties: Array<string> = ['user'];

  name: string;
  color: string;
  user: User;
}
