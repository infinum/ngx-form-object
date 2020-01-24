import { MetadataProperty } from '../../enums/metadata-property.enum';
import { ModelMetadata } from '../../types/model-metadata.type';

export function BelongsTo(): PropertyDecorator {
  return (target: object, propertyName: string | symbol) => {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

    modelMetadata.belongsToProperties = modelMetadata.belongsToProperties || [];

    if (typeof propertyName !== 'symbol') {
      modelMetadata.belongsToProperties.push(propertyName);
    }

    Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
  };
}
