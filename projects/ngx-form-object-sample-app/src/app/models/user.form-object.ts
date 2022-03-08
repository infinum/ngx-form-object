import { Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { ExtendedValidatorFn, FormObject, FormObjectOptions } from 'ngx-form-object';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

export class UserFormObject extends FormObject<User> {
	public validators: Record<string, ExtendedValidatorFn | Array<ExtendedValidatorFn>> = {
		name: [Validators.required],
	};

	constructor(public model: User, protected options: FormObjectOptions, public injector: Injector) {
		super(model, options);
	}

	public save(user: User): Observable<User> {
		return of(user);
	}
}
