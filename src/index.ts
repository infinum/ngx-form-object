import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO see why is this necessary
// tslint:disable-next-line:no-unused-variable
import {} from 'jasmine';

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
    CommonModule
  ]
})
export class NgxFormObjectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFormObjectModule,
      providers: []
    };
  }
}
