// params: value - string
// returns a new string with first letter capitalized
export function capitalize(value: string): string {
	let capitalizedValue = value;
	if (value) {
		capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
	}

	return capitalizedValue;
}
