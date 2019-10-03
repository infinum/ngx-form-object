import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FormGroupOptions {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}
