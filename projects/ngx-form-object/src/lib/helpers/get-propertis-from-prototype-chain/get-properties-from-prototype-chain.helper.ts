import { PropertyOptions } from '../../interfaces/property-options.interface';

export function getPropertiesFromPrototypeChain(
	propertyName: string | symbol,
	properties: Map<string | symbol, PropertyOptions> = new Map()
): Map<string | symbol, PropertyOptions> {
	let result: Map<string | symbol, PropertyOptions> = properties;

	if (this[propertyName]) {
		result = new Map([...properties, ...this[propertyName]]);
	}

	if (Object.getPrototypeOf(this)) {
		return getPropertiesFromPrototypeChain.call(Object.getPrototypeOf(this), propertyName, result);
	}

	return result;
}
