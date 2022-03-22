import { FormObject } from '../../form-object/form-object';

export function BuildControl(propertyName: string): MethodDecorator {
	return function (target: FormObject, _key: string | symbol, descriptor: PropertyDescriptor) {
		target.buildControlMethods = target.buildControlMethods || new Map();
		target.buildControlMethods.set(propertyName, descriptor.value);

		return descriptor;
	};
}
