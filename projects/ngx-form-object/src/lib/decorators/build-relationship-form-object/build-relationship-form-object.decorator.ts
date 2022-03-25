import { FormObject } from '../../form-object/form-object';

export function BuildRelationshipFormObject(propertyName: string): MethodDecorator {
	return function (target: FormObject, _key: string | symbol, descriptor: PropertyDescriptor) {
		target.createFormObjectMethods = target.createFormObjectMethods || new Map();
		target.createFormObjectMethods.set(propertyName, descriptor.value);

		return descriptor;
	};
}
