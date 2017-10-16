import { ModelMetadata } from 'types/model-metadata.type';
import { MetadataProperty } from 'enums/metadata-property.enum';

export function BelongsTo(): PropertyDecorator {
  return (target: Object, propertyName: string | symbol) => {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

    modelMetadata.belongsToProperties = modelMetadata.belongsToProperties || [];
    modelMetadata.belongsToProperties.push(propertyName);

    Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
  };
}
