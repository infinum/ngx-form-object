import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormObject } from '../form-object/form-object';

export class FormStore extends FormGroup {
	private _formObject: FormObject;
	private _isSubmitted: boolean = false;

	public get isChanged(): boolean {
		return this.attributesDidChange || this.belongsToPropertiesDidChange || this.hasManyPropertiesDidChange;
	}

	public set formObject(formObject: FormObject) {
		this._formObject = formObject;
	}

	public get formObject(): FormObject {
		return this._formObject;
	}

	public get model(): any {
		return this.formObject.model;
	}

	public get isSubmitted(): boolean {
		return this._isSubmitted;
	}

	public save(): Observable<any> {
		this._isSubmitted = true;
		return this.formObject._save(this);
	}

	private get attributesDidChange(): boolean {
		return this.formObject.attributePropertiesKeys.some(
			(propertyName) => this.controls[propertyName.toString()]['isChanged']
		);
	}

	private get belongsToPropertiesDidChange(): boolean {
		return this.formObject.belongsToPropertiesKeys.some(
			(propertyName) => this.controls[propertyName.toString()]['isChanged']
		);
	}

	private get hasManyPropertiesDidChange(): boolean {
		return this.formObject.hasManyPropertiesKeys.some(
			(propertyName) => this.controls[propertyName.toString()]['isChanged']
		);
	}
}
