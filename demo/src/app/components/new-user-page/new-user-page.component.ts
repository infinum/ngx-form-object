import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStore, FormObjectBuilder } from 'ngx-form-object';
import { UserFormObject } from 'app/forms/user-form-object/user.form-object';
import { User } from 'app/models/user.model';

@Component({
  selector: 'new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {
  public userForm: FormStore;

  constructor(
    private router: Router,
    private formObjectBuilder: FormObjectBuilder,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    const user: User = new User();
    this.userForm = this.createUserForm(user);
  }

  // TODO return type
  public onUserFormSave(userForm: FormStore): void {
    userForm.save().subscribe(() => {
      console.log('navigate');
      this.router.navigate(['/']);
    });
  }

  private createUserForm(user: User): FormStore {
    const userFormObject: UserFormObject = new UserFormObject(user, null, this.injector);

    const userFormStore: FormStore = this.formObjectBuilder.create(userFormObject);

    return userFormStore;
  }
}
