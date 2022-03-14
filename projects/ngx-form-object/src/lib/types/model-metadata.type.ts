import { PropertyOptions } from '../interfaces/property-options.interface';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ModelMetadata {
	attributeProperties: Map<string | symbol, PropertyOptions>;
	belongsToProperties: Map<string | symbol, PropertyOptions>;
	hasManyProperties: Map<string | symbol, PropertyOptions>;
}
