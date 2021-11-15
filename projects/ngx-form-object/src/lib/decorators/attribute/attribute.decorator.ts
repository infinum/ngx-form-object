import { MetadataProperty } from '../../enums/metadata-property.enum';
import { PropertyOptions } from '../../interfaces/property-options.interface';
import { ModelMetadata } from '../../types/model-metadata.type';

export function Attribute(options: PropertyOptions = {}): PropertyDecorator {
  return (target: object, propertyName: string | symbol) => {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, target.constructor) || {};

    modelMetadata.attributeProperties = modelMetadata.attributeProperties || new Map();
    modelMetadata.attributeProperties.set(propertyName, options);

    Reflect.defineMetadata(MetadataProperty.MODEL_METADATA, modelMetadata, target.constructor);
  };
}
