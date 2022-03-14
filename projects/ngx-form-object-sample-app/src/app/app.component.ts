import { Component, Injector } from '@angular/core';
import { FormObjectBuilder, FormStore } from 'ngx-form-object';
import { UserFormObject } from './models/user.form-object';
import { User } from './models/user.model';

@Component({
	selector: 'ngxfosa-root', // ngxfosa === ngx-form-object sample app
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public userFormStore: FormStore;

	constructor(private readonly formObjectBuilder: FormObjectBuilder, public injector: Injector) {
		const user: User = new User();
		user.name = 'Steve';
		const userFormObject = new UserFormObject(user, null, this.injector);
		this.userFormStore = this.formObjectBuilder.create(userFormObject);
	}

	public onSubmit(): void {
		this.userFormStore.save().subscribe((user) => {
			console.log(user);
			alert('User saved!');
		});
	}
}
