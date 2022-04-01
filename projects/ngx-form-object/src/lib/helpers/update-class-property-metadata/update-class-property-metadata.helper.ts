export function updateClassPropertyMetadata<T, Target>(
	target: Target,
	propertyName: string | symbol,
	internalClassPropertyName: symbol,
	options: T
): void {
	const classPropertyDescriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
		target,
		internalClassPropertyName
	) || { value: new Map() };
	const classPropertyOptions: Map<string | symbol, T> = classPropertyDescriptor.value;

	classPropertyOptions.set(propertyName, options);

	Object.defineProperty(target, internalClassPropertyName, {
		enumerable: false,
		writable: true,
		configurable: false,
		value: classPropertyOptions,
	});
}
