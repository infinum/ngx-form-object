import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormStore } from 'ngx-form-object';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() userForm: FormStore;
  @Output() userFormSave: EventEmitter<FormStore> = new EventEmitter();

  public onCreateUserClick(): void {
    this.userFormSave.emit(this.userForm);
  }
}
