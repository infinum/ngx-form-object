import { FormGroup, ValidationErrors } from '@angular/forms';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';

export type ExtendedValidatorFn = (
	formProperty: ExtendedFormControl | ExtendedFormArray | FormGroup
) => ValidationErrors | null;
