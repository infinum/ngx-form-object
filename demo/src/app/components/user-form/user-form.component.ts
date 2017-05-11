import { Component, Input, Output, EventEmitter, Injector } from '@angular/core';
import { FormStore, FormObjectBuilder } from 'ngx-form-object';
import { User } from 'app/models/user.model';
import { Car } from 'app/models/car.model';
import { CarFormObject } from 'app/forms/car-form-object/car.form-object';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() userForm: FormStore;
  @Output() userFormSave: EventEmitter<FormStore> = new EventEmitter();

  constructor(
    private formObjectBuilder: FormObjectBuilder,
    private injector: Injector
  ) { }

  get user(): User {
    return this.userForm.model as User;
  }

  get isUserSaved(): boolean {
    return Boolean(this.user.id);
  }

  get usersCars(): Array<Car> {
    return this.userForm.controls.cars['controls'].map((carForm: FormStore) => carForm.value);
  }

  public onSaveUserClick(): void {
    this.userFormSave.emit(this.userForm);
  }

  public onAddNewCarClick(): void {
    const usersCars: any = this.userForm.controls.cars;
    const carForm: FormStore = this.createNewCarForm();
    usersCars.push(carForm);
  }

  private createNewCarForm(): FormStore {
    const car: Car = new Car({
      user: this.user
    });

    const carFormObject: CarFormObject = new CarFormObject(car, null, this.injector);
    const carFormStore: FormStore = this.formObjectBuilder.create(carFormObject);

    return carFormStore;
  }
}
