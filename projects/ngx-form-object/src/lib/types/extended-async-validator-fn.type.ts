import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';

export type ExtendedAsyncValidatorFn = (
	extendedFormControl: ExtendedFormControl
) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
