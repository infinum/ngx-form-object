import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormObject } from '../form-object/form-object';

export class FormStore<T> extends FormGroup {
  private _formObject: FormObject<T>;

  get isChanged(): boolean {
    return this.attributesDidChange || this.belongsToPropertiesDidChange || this.hasManyPropertiesDidChange;
  }

  set formObject(formObject: FormObject<T>) {
    this._formObject = formObject;
  }

  get formObject(): FormObject<T> {
    return this._formObject;
  }

  get model(): T {
    return this.formObject.model;
  }

  public save(): Observable<T> {
    return this.formObject.save(this);
  }

  private get attributesDidChange(): boolean {
    return this.formObject.attributeProperties.some((propertyName) => this.controls[propertyName.toString()]['isChanged']);
  }

  private get belongsToPropertiesDidChange(): boolean {
    return this.formObject.belongsToProperties.some((propertyName) => this.controls[propertyName.toString()]['isChanged']);
  }

  private get hasManyPropertiesDidChange(): boolean {
    return this.formObject.hasManyProperties.some((propertyName) => this.controls[propertyName.toString()]['isChanged']);
  }
}
