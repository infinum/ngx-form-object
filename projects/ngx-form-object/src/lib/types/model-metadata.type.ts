import { PropertyOptions } from '../interfaces/property-options.interface';

export interface ModelMetadata {
  attributeProperties: Map<string | symbol, PropertyOptions>;
  belongsToProperties: Array<string | symbol>;
  hasManyProperties: Map<string | symbol, PropertyOptions>;
}
