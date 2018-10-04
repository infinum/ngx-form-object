import { Injector } from '@angular/core';
import { Observable, Subject, combineLatest, of as observableOf } from 'rxjs';
import { FormObjectOptions, FormStore, FormModel } from 'ngx-form-object';
import { BaseFormObject } from 'app/forms/base-form-object/base.form-object';
import { CarFormObject } from 'app/forms/car-form-object/car.form-object';
import { Car } from 'app/models/car.model';
import { User } from 'app/models/user.model';
import { Validators } from '@angular/forms';

export class UserFormObject extends BaseFormObject {
  validators: object = {
    firstName: [Validators.required]
  };

  constructor(
    public model: User,
    protected options: FormObjectOptions,
    private injector: Injector
  ) {
    super(model, options, injector);
  }

  public createCarsFormObject(car: Car, options: FormObjectOptions): CarFormObject {
    return new CarFormObject(car, options, this.injector);
  }

  protected afterSave(user: User, userForm: FormStore): Observable<User> {
    const user$: Subject<User> = new Subject<User>();

    const carForms: Array<FormStore> = userForm.controls.cars['controls'];

    if (!carForms.length) {
      return observableOf(user);
    }

    const cars$: Array<Observable<FormModel>> = carForms.map((carForm: FormStore) => carForm.save());

    combineLatest(cars$).subscribe(() => {
      user$.next(user);
    });

    return user$;
  }
}
