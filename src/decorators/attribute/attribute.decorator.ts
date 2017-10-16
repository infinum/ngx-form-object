import { MetadataProperty } from 'enums/metadata-property.enum';
import { ModelMetadata } from 'types/model-metadata.type';

export function Attribute(options?: object): PropertyDecorator {
  return (target: Object, propertyName: string | symbol) => {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

    modelMetadata.attributeProperties = modelMetadata.attributeProperties || [];
    modelMetadata.attributeProperties.push(propertyName);

    Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
  };
}
