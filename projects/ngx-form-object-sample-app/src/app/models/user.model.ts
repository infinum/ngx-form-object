import { Attribute } from 'ngx-form-object';

export class User {
	public config = null;

	@Attribute()
	public name: string;
}
