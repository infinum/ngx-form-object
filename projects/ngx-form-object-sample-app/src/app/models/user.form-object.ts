import { Injector } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { FormObject, FormObjectOptions } from 'ngx-form-object';

export class UserFormObject extends FormObject {
	public validators: Record<string, ValidatorFn | Array<ValidatorFn>> = {
		name: [Validators.required],
	};

	constructor(public model: any, protected options: FormObjectOptions, public injector: Injector) {
		super(model, options);
	}
}
