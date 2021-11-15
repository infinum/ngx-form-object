import { PropertyOptions } from '../interfaces/property-options.interface';

export interface ModelMetadata {
  attributeProperties: Map<string | symbol, PropertyOptions>;
  belongsToProperties: Map<string | symbol, PropertyOptions>;
  hasManyProperties: Map<string | symbol, PropertyOptions>;
}
