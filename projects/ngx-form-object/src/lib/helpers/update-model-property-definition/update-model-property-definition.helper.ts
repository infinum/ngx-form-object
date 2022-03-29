import { PropertyOptions } from '../../interfaces/property-options.interface';

export function updateModelPropertyDefinition(
	target: Record<string, unknown>,
	propertyName: string | symbol,
	internalModelProperty: symbol,
	options: PropertyOptions
): void {
	const modelAttributePropertiesDescriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
		target,
		internalModelProperty
	) || { value: new Map() };
	const attributeProperties: Map<string | symbol, PropertyOptions> = modelAttributePropertiesDescriptor.value;

	attributeProperties.set(propertyName, options);

	Object.defineProperty(target, internalModelProperty, {
		enumerable: false,
		writable: true,
		configurable: false,
		value: attributeProperties,
	});
}
