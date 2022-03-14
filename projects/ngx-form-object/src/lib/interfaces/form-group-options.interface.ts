import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface FormGroupOptions {
	validator?: ValidatorFn;
	asyncValidator?: AsyncValidatorFn;
}
