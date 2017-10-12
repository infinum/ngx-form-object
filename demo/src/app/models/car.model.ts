import { FormModel, Attribute, BelongsTo } from 'ngx-form-object';
import { SimpleModel } from 'app/services/datastore/datastore.service';
import { User } from 'app/models/user.model';

export class Car extends SimpleModel implements FormModel {
  hasManyProperties: Array<string> = [];

  @Attribute()
  name: string;

  @Attribute()
  color: string;

  @BelongsTo()
  user: User;
}
