import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormObject } from '../form-object/form-object';

export class FormStore extends FormGroup {
  private _formObject: FormObject;
  private _isSubmitted: boolean = false;

  get isChanged(): boolean {
    return this.attributesDidChange || this.belongsToPropertiesDidChange || this.hasManyPropertiesDidChange;
  }

  set formObject(formObject: FormObject) {
    this._formObject = formObject;
  }

  get formObject(): FormObject {
    return this._formObject;
  }

  get model(): any {
    return this.formObject.model;
  }

  get isSubmitted(): boolean {
    return this._isSubmitted;
  }

  public save(): Observable<any> {
    this._isSubmitted = true;
    return this.formObject._save(this);
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
