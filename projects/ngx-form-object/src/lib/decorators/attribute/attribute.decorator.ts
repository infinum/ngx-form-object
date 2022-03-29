import { PropertyOptions } from '../../interfaces/property-options.interface';
import { MODEL_ATTRIBUTE_PROPERTIES } from '../../types/model-metadata.type';

export function Attribute(options: PropertyOptions = {}): PropertyDecorator {
	return (target: Record<string, unknown>, propertyName: string | symbol) => {
		const modelAttributePropertiesDescriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
			target,
			MODEL_ATTRIBUTE_PROPERTIES
		) || { value: new Map() };
		const attributeProperties: Map<string | symbol, PropertyOptions> = modelAttributePropertiesDescriptor.value;

		attributeProperties.set(propertyName, options);

		Object.defineProperty(target, MODEL_ATTRIBUTE_PROPERTIES, {
			enumerable: false,
			writable: true,
			configurable: false,
			value: attributeProperties,
		});
	};
}
