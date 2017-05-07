// import { FormModel } from './form-model.interface';

export interface FormObjectOptions {
  attributesTransformer: Function; // (model: FormModel) => Array<string>;
  hasManyTransformer: Function;
  belongsToTransformer: Function;
  getConfig: Function;
}
