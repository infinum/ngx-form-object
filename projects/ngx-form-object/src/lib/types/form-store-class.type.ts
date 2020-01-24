import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormStore } from '../form-store/form-store';

export type FormStoreClass<T = any> = new (
  controls: Record<string, AbstractControl>,
  validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions | null,
  asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn> | null,
) => FormStore<T>;
