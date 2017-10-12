import { FormModel, Attribute } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';
import { Car } from 'app/models/car.model';

export class User extends SimpleModel implements FormModel {
  attributeProperties: Array<string> = ['firstName', 'lastName'];
  hasManyProperties: Array<string> = ['cars'];
  belongsToProperties: Array<string> = [];

  @Attribute()
  firstName: string;

  @Attribute()
  lastName: string;

  cars: Array<Car>;
}
