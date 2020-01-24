import { MetadataProperty } from '../../enums/metadata-property.enum';
import { ModelMetadata } from '../../types/model-metadata.type';

export function HasMany(): PropertyDecorator {
  return (target: object, propertyName: string | symbol) => {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

    modelMetadata.hasManyProperties = modelMetadata.hasManyProperties || [];

    if (typeof propertyName !== 'symbol') {
      modelMetadata.hasManyProperties.push(propertyName);
    }

    Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
  };
}
