import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
// TODO see why is this necessary
// tslint:disable-next-line:no-unused-variable
import {} from 'jasmine';

import { FormObjectBuilder } from './form-object-builder/form-object-builder';

export * from './extended-form-array/extended-form-array';
export * from './extended-form-control/extended-form-control';
export * from './form-object/form-object';
export * from './form-object-builder/form-object-builder';
export * from './form-store/form-store';

export * from './interfaces/form-model.interface';
export * from './interfaces/form-group-options.interface';
export * from './interfaces/form-object-options.interface';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FormObjectBuilder
  ]
})
export class NgxFormObjectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFormObjectModule,
      providers: [
        FormObjectBuilder
      ]
    };
  }
}
