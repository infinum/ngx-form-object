import { ValidatorFn, Validators } from '@angular/forms';
import { FormObject } from './form-object';
/* eslint-disable max-classes-per-file */

class MockModel {
	public config: any = null;
	public name: string;
	public city: string;
	public pet: string;
}

const customValidatorFn: ValidatorFn = () => null;

class MockFormObject extends FormObject {
	public validators: Record<string, ValidatorFn | Array<ValidatorFn>> = {
		name: [customValidatorFn, Validators.required],
		city: customValidatorFn,
	};
}

describe('Form Model', () => {
	let formModel: MockFormObject;

	beforeEach(() => {
		const mockModel = new MockModel();
		formModel = new MockFormObject(mockModel, null);
		console.warn(formModel);
	});
});
