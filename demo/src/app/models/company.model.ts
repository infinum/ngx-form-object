import { FormModel } from 'ngx-form-object';

export class Company implements FormModel {
  attributeProperties: Array<string> = ['name'];
  hasManyProperties: Array<string> = [];
  belongsToProperties: Array<string> = [];

  name: string;
}
