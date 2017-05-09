import { Component, Injector, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormStore, FormObjectBuilder } from 'ngx-form-object';
import { UserFormObject } from 'app/forms/user-form-object/user.form-object';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent implements OnInit {
  public userForm: FormStore;

  constructor(
    private router: Router,
    protected route: ActivatedRoute,
    private formObjectBuilder: FormObjectBuilder,
    private injector: Injector,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId: string = this.route.snapshot.params.id;
    const user: User = this.userService.getUser(userId);
    this.userForm = this.createUserForm(user);
    window['uf'] = this.userForm;
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
