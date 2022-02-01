import { contains } from './contains.helper';

describe('Helper - contains', () => {
	const items = ['Tomato', 'Potato', 'Salt'];
	const comparisonFunction = (currentItem, searchedItem) => {
		return currentItem === searchedItem;
	};

	it('should return true if array contains word Potato', () => {
		const result = contains(items, 'Potato');

		expect(result).toBeTruthy();
	});

	it("should return false if array doesn't contain word Meat", () => {
		const result = contains(items, 'Meat');

		expect(result).toBeFalsy();
	});

	it('should return true if array contains something macthed in comparisonFunction', () => {
		const result = contains(items, 'Salt', comparisonFunction);

		expect(result).toBeTruthy();
	});
});
