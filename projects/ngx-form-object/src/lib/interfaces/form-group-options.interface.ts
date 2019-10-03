import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface FormGroupOptions {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}
