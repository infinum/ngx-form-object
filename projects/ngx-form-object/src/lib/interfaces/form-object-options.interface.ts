export interface FormObjectOptions<T = any> {
  getModelType?: (model: T) => string;
  // tslint:disable-next-line: ban-types
  getConfig?: (constructor: Function) => { type: string };
}
