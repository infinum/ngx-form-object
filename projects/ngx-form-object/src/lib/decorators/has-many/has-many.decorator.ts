import { updateModelPropertyDefinition } from '../../helpers/update-model-property-definition/update-model-property-definition.helper';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { MODEL_HAS_MANY_PROPERTIES } from '../../types/model-metadata.type';

export function HasMany(options: PropertyOptions = {}): PropertyDecorator {
	return (target: Record<string, unknown>, propertyName: string | symbol) => {
		updateModelPropertyDefinition(target, propertyName, MODEL_HAS_MANY_PROPERTIES, options);
	};
}
