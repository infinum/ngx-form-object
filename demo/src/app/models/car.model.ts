import { FormModel, Attribute } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';
import { User } from 'app/models/user.model';

export class Car extends SimpleModel implements FormModel {
  attributeProperties: Array<string> = ['name', 'color'];
  hasManyProperties: Array<string> = [];
  belongsToProperties: Array<string> = ['user'];

  @Attribute()
  name: string;

  @Attribute()
  color: string;

  @Attribute()
  user: User;

  @Attribute()
  test123: string;
}
