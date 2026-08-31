import { FormObject } from '../../form-object/form-object';
import { updateClassPropertyMetadata } from '../../helpers/update-class-property-metadata/update-class-property-metadata.helper';
import { MODEL_BUILD_CONTROL_METHODS } from '../../types/model-metadata.type';

export function BuildControl<T>(propertyName: string): MethodDecorator {
	return function (target: FormObject<T>, _key: string | symbol, descriptor: PropertyDescriptor) {
		updateClassPropertyMetadata(target, propertyName, MODEL_BUILD_CONTROL_METHODS, descriptor.value);
	};
}
