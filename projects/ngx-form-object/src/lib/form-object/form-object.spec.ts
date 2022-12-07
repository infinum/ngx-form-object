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

	protected beforeSave(form: FormStore): Observable<FormStore> {
		this.mockBeforeSave();
		return of(form);
	}

	protected save(_model: any): Observable<any> {
		this.mockSave();
		_model.displayName = _model.name;
		return of(_model);
	}

	protected afterSave(model?: any, _form?: FormStore): Observable<any> {
		this.mockAfterSave();
		return of(model);
	}

	public mockBeforeSave() {
		// noop
	}

	public mockSave() {
		// noop
	}

	public mockAfterSave() {
		// noop
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

		expect(form.model.name).not.toBe(name);

		form.save().subscribe((updatedModel: any) => {
			expect(updatedModel.name).toBe(name);
			done();
		});
	});

	it('should trigger beforeSave hook before saving the model', (done: DoneFn) => {
		form.get('name').setValue(name);
		const userFormObject: UserMockFormObject = form.formObject as UserMockFormObject;

		const spy = spyOn(userFormObject, 'mockBeforeSave').and.callThrough();

		form.save().subscribe(() => {
			expect(spy).toHaveBeenCalledTimes(1);
			done();
		});
	});

	it('should throw observable error after beforeSave hook is triggered if form is not valid', (done: DoneFn) => {
		const fns = {
			successFn: () => {
				done();
			},
			errorFn: () => {
				done();
			},
		};
		const userFormObject: UserMockFormObject = form.formObject as UserMockFormObject;

		const successFnSpy = spyOn(fns, 'successFn').and.callThrough();
		const errorFnSpy = spyOn(fns, 'errorFn').and.callThrough();
		const mockAfterSaveSpy = spyOn(userFormObject, 'mockAfterSave').and.callThrough();

		form.save().subscribe(fns.successFn, fns.errorFn);

		expect(errorFnSpy).toHaveBeenCalledTimes(1);
		expect(successFnSpy).not.toHaveBeenCalled();
		expect(mockAfterSaveSpy).not.toHaveBeenCalled();
	});

	it('should not trigger save method if form is not valid', (done: DoneFn) => {
		const fns = {
			successFn: () => {
				done();
			},
			errorFn: () => {
				done();
			},
		};

		const userFormObject: UserMockFormObject = form.formObject as UserMockFormObject;
		const mockSaveSpy = spyOn(userFormObject, 'mockSave').and.callThrough();

		form.save().subscribe(fns.successFn, fns.errorFn);

		expect(mockSaveSpy).not.toHaveBeenCalled();
	});

	it('should trigger save hook if form is valid', (done: DoneFn) => {
		form.get('name').setValue(name);

		const fns = {
			successFn: () => {
				done();
			},
			errorFn: () => {
				done();
			},
		};

		const userFormObject: UserMockFormObject = form.formObject as UserMockFormObject;
		const mockSaveSpy = spyOn(userFormObject, 'mockSave').and.callThrough();

		form.save().subscribe(fns.successFn, fns.errorFn);

		expect(mockSaveSpy).toHaveBeenCalledTimes(1);
	});

	it('should map model properties to the form', (done: DoneFn) => {
		form.get('name').setValue(name);

		expect(form.model.displayName).not.toBe(name);

		form.save().subscribe(() => {
			expect(form.model.displayName).toBe(name);
			done();
		});
	});

	it('should trigger afterSave hook after saving the model', (done: DoneFn) => {
		form.get('name').setValue(name);

		const userFormObject: UserMockFormObject = form.formObject as UserMockFormObject;

		const mockAfterSaveSpy = spyOn(userFormObject, 'mockAfterSave').and.callThrough();

		form.save().subscribe(() => {
			expect(mockAfterSaveSpy).toHaveBeenCalledTimes(1);
			done();
		});
	});
});
