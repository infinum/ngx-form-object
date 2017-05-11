import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import { FormObjectOptions, FormStore } from 'ngx-form-object';
import { BaseFormObject } from 'app/forms/base-form-object/base.form-object';
import { CarFormObject } from 'app/forms/car-form-object/car.form-object';
import { Car } from 'app/models/car.model';
import { User } from 'app/models/user.model';

export class UserFormObject extends BaseFormObject {
  validators: {
    firstName: Validators.required
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

  protected afterSave(car: Car, userForm: FormStore): Observable<Car> {
    const car$: Subject<Car> = new Subject<Car>();

    const carForms: Array<FormStore> = userForm.controls.cars['controls'];
    const cars$: any = carForms.map((carForm: FormStore) => carForm.save());

    Observable.combineLatest(...cars$).subscribe(() => {
      car$.next(car);
    });

    return car$;
  }
}
