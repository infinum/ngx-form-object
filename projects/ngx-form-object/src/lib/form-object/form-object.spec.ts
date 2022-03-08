import { Validators } from '@angular/forms';
import { ExtendedValidatorFn } from '../types/extended-validator-fn.type';
import { FormObject } from './form-object';
// tslint:disable: max-classes-per-file

class UserMock {
	public config: any = null;
	public name: string;
	public city: string;
}

const customValidatorFn: ExtendedValidatorFn = () => null;

class UserMockFormObject extends FormObject<UserMock> {
	public validators: Record<string, ExtendedValidatorFn | Array<ExtendedValidatorFn>> = {
		name: [customValidatorFn, Validators.required],
		city: customValidatorFn,
	};
}

describe('Model Form Object', () => {
	let userMockFormObject: UserMockFormObject;

	beforeEach(() => {
		const userMock = new UserMock();
		userMockFormObject = new UserMockFormObject(userMock, null);
	});

	it('should return validators for single form field', () => {
		expect(userMockFormObject.validators.name).toEqual([customValidatorFn, Validators.required]);
		expect(userMockFormObject.validators.city).toEqual(customValidatorFn);
	});
});
