import { updateClassPropertyMetadata } from '../../helpers/update-class-property-metadata/update-class-property-metadata.helper';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { MODEL_ATTRIBUTE_PROPERTIES } from '../../types/model-metadata.type';

export function Attribute(options: PropertyOptions = {}): PropertyDecorator {
	return (target: Record<string, unknown>, propertyName: string | symbol) => {
		updateClassPropertyMetadata(target, propertyName, MODEL_ATTRIBUTE_PROPERTIES, options);
	};
}
