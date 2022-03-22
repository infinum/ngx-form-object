import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormObjectBuilder } from './lib/form-object-builder/form-object-builder';

export * from './lib/extended-form-array/extended-form-array';
export * from './lib/extended-form-control/extended-form-control';
export * from './lib/form-object/form-object';
export * from './lib/form-object-builder/form-object-builder';
export * from './lib/form-store/form-store';

export * from './lib/interfaces/form-group-options.interface';
export * from './lib/interfaces/form-object-options.interface';

export * from './lib/decorators/attribute/attribute.decorator';
export * from './lib/decorators/belongs-to/belongs-to.decorator';
export * from './lib/decorators/build-control/build-control.decorator';
export * from './lib/decorators/has-many/has-many.decorator';

export * from './lib/types/model-metadata.type';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	providers: [FormObjectBuilder],
})
export class NgxFormObjectModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxFormObjectModule,
			providers: [FormObjectBuilder],
		};
	}
}
