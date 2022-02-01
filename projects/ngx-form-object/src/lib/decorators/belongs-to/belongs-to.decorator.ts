import { MetadataProperty } from '../../enums/metadata-property.enum';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { ModelMetadata } from '../../types/model-metadata.type';

export function BelongsTo(options: PropertyOptions = {}): PropertyDecorator {
	return (target: object, propertyName: string | symbol) => {
		const modelMetadata: ModelMetadata =
			Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

		modelMetadata.belongsToProperties = modelMetadata.belongsToProperties || new Map();
		modelMetadata.belongsToProperties.set(propertyName, options);

		Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
	};
}
