import { PropertyOptions } from '../interfaces/property-options.interface';

export interface ModelMetadata {
  attributeProperties: Array<string | symbol>;
  belongsToProperties: Array<string | symbol>;
  hasManyProperties: Map<string | symbol, PropertyOptions>;
}
