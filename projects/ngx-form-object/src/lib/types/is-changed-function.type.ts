import { AbstractControl } from '@angular/forms';

export type IsChangedFunction<T extends AbstractControl> = (
	initialValue: any,
	currentValue: any,
	formControl: T
) => boolean;
