import { Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { FormStore, FormObjectOptions } from 'ngx-form-object';
import { BaseFormObject } from 'app/forms/base-form-object/base.form-object';
import { DatastoreService } from 'app/services/datastore/datastore.service';
import { Observable } from 'rxjs/Observable';
import { Car } from 'app/models/car.model';

export class CarFormObject extends BaseFormObject {
  private datastore: DatastoreService;

  validators: Object = {
    name: [Validators.required]
  };

  constructor(
    public model: Car,
    protected options: FormObjectOptions,
    private injector: Injector
  ) {
    super(model, options, injector);

    this.datastore = injector.get(DatastoreService);
  }

  // If you're using an external library as a datastore
  // this will be handle for you, but in our case, this is a great
  // example of using afterSave hook
  private handleHasManyRelationships(car: Car): void {
    const assignedUser = this.datastore['database']['User'].find((user) => user.id === car.user.id);
    assignedUser.cars = assignedUser.cars || [];

    let usersCar: Car = assignedUser.cars.find((c: Car) => car.id === c.id);

    if (usersCar) {
      const index = assignedUser.cars.indexOf(usersCar);
      assignedUser.cars[index] = car;
    } else {
      assignedUser.cars.push(car);
    }
  }

  protected afterSave(car: Car, form: FormStore): Observable<Car> {
    this.handleHasManyRelationships(car);
    return new BehaviorSubject(car);
  }
}
