import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormObject } from '../form-object/form-object';

export class FormStore<T> extends FormGroup {
	private _formObject: FormObject<T>;
	private _isSubmitted: boolean = false;

	public get isChanged(): boolean {
		return this.attributesDidChange || this.belongsToPropertiesDidChange || this.hasManyPropertiesDidChange;
	}

	public set formObject(formObject: FormObject<T>) {
		this._formObject = formObject;
	}

	public get formObject(): FormObject<T> {
		return this._formObject;
	}

	public get model(): T {
		return this.formObject.model;
	}

	public get isSubmitted(): boolean {
		return this._isSubmitted;
	}

	public save(): Observable<T> {
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
