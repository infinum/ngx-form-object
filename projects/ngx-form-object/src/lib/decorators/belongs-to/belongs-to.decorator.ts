import { updateClassPropertyMetadata } from '../../helpers/update-class-property-metadata/update-class-property-metadata.helper';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { MODEL_HAS_ONE_PROPERTIES } from '../../types/model-metadata.type';

export function BelongsTo(options: PropertyOptions = {}): PropertyDecorator {
	return (target: Record<string, unknown>, propertyName: string | symbol) => {
		updateClassPropertyMetadata(target, propertyName, MODEL_HAS_ONE_PROPERTIES, options);
	};
}
