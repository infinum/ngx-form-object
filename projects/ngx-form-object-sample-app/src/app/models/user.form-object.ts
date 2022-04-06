import { Injector } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { FormObject, FormObjectOptions } from 'ngx-form-object';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

export class UserFormObject extends FormObject {
	public validators: Record<string, ValidatorFn | Array<ValidatorFn>> = {
		name: [Validators.required],
	};

	constructor(public model: any, protected options: FormObjectOptions, public injector: Injector) {
		super(model, options);
	}

	public save(user: User): Observable<User> {
		return of(user);
	}
}
