import { ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Attribute } from '../../public-api';
import { FormObjectBuilder } from '../form-object-builder/form-object-builder';
import { FormStore } from '../form-store/form-store';
import { FormObject } from './form-object';
/* eslint-disable max-classes-per-file */

class UserMock {
	@Attribute()
	public name: string;

	@Attribute()
	public displayName: string;
}

const customValidatorFn: ValidatorFn = () => null;

class UserMockFormObject extends FormObject {
	public validators: Record<string, ValidatorFn | Array<ValidatorFn>> = {
		name: [Validators.required],
		city: customValidatorFn,
	};

	public beforeSaveTriggerCount = 0;
	public saveTriggerCount = 0;
	public afterSaveTriggerCount = 0;

	protected beforeSave(form: FormStore): Observable<FormStore> {
		this.beforeSaveTriggerCount++;
		return of(form);
	}

	protected save(_model: any): Observable<any> {
		this.saveTriggerCount++;
		_model.displayName = _model.name;
		return of(_model);
	}

	protected afterSave(model?: any, _form?: FormStore): Observable<any> {
		this.afterSaveTriggerCount++;
		return of(model);
	}
}

describe('Saving form', () => {
	const name = 'John';
	let form: FormStore;

	beforeEach(() => {
		const formObjectBuilder = new FormObjectBuilder();
		const mockModel = new UserMock();
		const formObject = new UserMockFormObject(mockModel, null);
		form = formObjectBuilder.create(formObject);
	});

	it('should map form properties to the model', (done: DoneFn) => {
		form.get('name').setValue(name);
		form.save().subscribe((updatedModel: any) => {
			expect(updatedModel.name).toBe(name);
			done();
		});
	});

	it('should trigger beforeSave hook before saving the model', (done: DoneFn) => {
		form.get('name').setValue(name);
		form.save().subscribe(() => {
			expect((form.formObject as UserMockFormObject).beforeSaveTriggerCount).toBe(1);
			done();
		});
	});

	it('should throw observable error after beforeSave hook is triggered if form is not valid', (done: DoneFn) => {
		let successCount = 0;
		let errorCount = 0;
		form.save().subscribe(
			() => {
				successCount++;
				done();
			},
			() => {
				errorCount++;
				done();
			}
		);
		expect(errorCount).toBe(1);
		expect(successCount).toBe(0);
	});

	it('should not trigger save method if form is not valid', (done: DoneFn) => {
		form.save().subscribe(
			() => {
				done();
			},
			() => {
				expect((form.formObject as UserMockFormObject).saveTriggerCount).toBe(0);
				done();
			}
		);
	});

	it('should trigger save hook if form is valid', (done: DoneFn) => {
		form.get('name').setValue(name);
		form.save().subscribe(() => {
			expect((form.formObject as UserMockFormObject).saveTriggerCount).toBe(1);
			done();
		});
	});

	it('should map model properties to the form', (done: DoneFn) => {
		form.get('name').setValue(name);
		form.save().subscribe(() => {
			expect((form.formObject as UserMockFormObject).saveTriggerCount).toBe(1);
			done();
		});
	});

	it('should trigger afterSave hook after saving the model', (done: DoneFn) => {
		form.get('name').setValue(name);
		form.save().subscribe(() => {
			expect(form.model.displayName).toBe(name);
			done();
		});
	});
});
