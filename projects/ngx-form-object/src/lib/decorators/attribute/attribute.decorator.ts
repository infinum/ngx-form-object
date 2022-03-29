import { updateModelPropertyDefinition } from '../../helpers/update-model-property-definition/update-model-property-definition.helper';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { MODEL_ATTRIBUTE_PROPERTIES } from '../../types/model-metadata.type';

export function Attribute(options: PropertyOptions = {}): PropertyDecorator {
	return (target: Record<string, unknown>, propertyName: string | symbol) => {
		updateModelPropertyDefinition(target, propertyName, MODEL_ATTRIBUTE_PROPERTIES, options);
	};
}
