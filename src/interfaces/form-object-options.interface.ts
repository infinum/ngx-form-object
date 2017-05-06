import { FormModel } from './form-model.interface';

export interface FormObjectOptions {
  attributesTransformer: (model: FormModel) => Array<string>;
  hasManyTransformer: Function;
  belongsToTransformer: Function;
  getConfig: Function;
}
