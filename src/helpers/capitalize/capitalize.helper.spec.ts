import { capitalize } from './capitalize.helper';

describe('Helper - capitalize', () => {
  it('should return a string with first letter capitalized', () => {
    const testString = 'test';
    const expectedString = 'Test';

    const result = capitalize(testString);

    expect(result).toBe(expectedString);
  });

  it('should return unchanged string if the first character is not a letter', () => {
    const testString = '1test';

    const result = capitalize(testString);

    expect(result).toBe(testString);
  });
});
