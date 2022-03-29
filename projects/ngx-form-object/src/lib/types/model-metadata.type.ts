import { PropertyOptions } from '../interfaces/property-options.interface';

export const MODEL_ATTRIBUTE_PROPERTIES = Symbol('model_attribute_properties');

export interface ModelMetadata {
	attributeProperties: Map<string | symbol, PropertyOptions>;
	belongsToProperties: Map<string | symbol, PropertyOptions>;
	hasManyProperties: Map<string | symbol, PropertyOptions>;
}
