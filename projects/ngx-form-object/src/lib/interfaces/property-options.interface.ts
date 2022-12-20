import { AbstractControl } from '@angular/forms';
import { IsChangedFunction } from '../types/is-changed-function.type';

export interface PropertyOptions<T extends AbstractControl = AbstractControl> {
	isChanged?: IsChangedFunction<T>;
}
