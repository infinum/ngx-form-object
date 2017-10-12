import { FormModel, Attribute, HasMany } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';
import { Car } from 'app/models/car.model';

export class User extends SimpleModel implements FormModel {
  config = null;  

  @Attribute()
  firstName: string;

  @Attribute()
  lastName: string;

  @HasMany()
  cars: Array<Car>;
}
