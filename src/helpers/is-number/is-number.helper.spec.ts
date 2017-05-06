import { isNumber } from './is-number.helper';

describe('Helper - isNumber', () => {
  it('should return true if a number is provided', () => {
    const result = isNumber(5);
    expect(result).toBe(true);
  });

  it('should return true if a negative number is provided', () => {
    const result = isNumber(-5);
    expect(result).toBe(true);
  });

  it('should return false if a function is provided', () => {
    const testFn = () => {};

    const result = isNumber(testFn);
    expect(result).toBe(false);
  });

  it('should return false if a string is provided', () => {
    const result = isNumber('teststr');
    expect(result).toBe(false);
  });

  it('should return false if an object is provided', () => {
    const result = isNumber({});
    expect(result).toBe(false);
  });

  it('should return false if undefined is provided', () => {
    const result = isNumber(undefined);
    expect(result).toBe(false);
  });

  it('should return false if null is provided', () => {
    const result = isNumber(null);
    expect(result).toBe(false);
  });

  it('should return false if "false" is provided', () => {
    const result = isNumber(false);
    expect(result).toBe(false);
  });

  it('should return false if "true" is provided', () => {
    const result = isNumber(true);
    expect(result).toBe(false);
  });

  it('should return false if NaN is provided', () => {
    const result = isNumber(NaN);
    expect(result).toBe(false);
  });
});
