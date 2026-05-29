import { FormObject } from '../../form-object/form-object';
import { updateClassPropertyMetadata } from '../../helpers/update-class-property-metadata/update-class-property-metadata.helper';
import { CREATE_FORM_OBJECT_METHODS } from '../../types/model-metadata.type';

export function BuildRelationshipFormObject<T>(propertyName: string): MethodDecorator {
	return function (target: FormObject<T>, _key: string | symbol, descriptor: PropertyDescriptor) {
		updateClassPropertyMetadata(target, propertyName, CREATE_FORM_OBJECT_METHODS, descriptor.value);
	};
}
