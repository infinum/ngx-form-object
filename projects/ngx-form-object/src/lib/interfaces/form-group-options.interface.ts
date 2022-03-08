import { ExtendedAsyncValidatorFn } from '../types/extended-async-validator-fn.type';
import { ExtendedValidatorFn } from '../types/extended-validator-fn.type';

export interface FormGroupOptions {
	validator?: ExtendedValidatorFn;
	asyncValidator?: ExtendedAsyncValidatorFn;
}
