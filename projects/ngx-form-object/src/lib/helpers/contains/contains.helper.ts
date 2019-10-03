// tslint:disable-next-line: ban-types
export function contains<T>(arr: Array<T>, item: T, comparisonFunction?: Function): boolean {
  if (comparisonFunction) {
    return arr.some((arrItem: T) => comparisonFunction(arrItem, item));
  } else {
    return arr.indexOf(item) !== -1;
  }
}
