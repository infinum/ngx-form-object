import { FormControl } from '@angular/forms';

export function transformToFormControlArray<T>(items: Array<T> = []): Array<FormControl> {
  const arrayItems: Array<T> = [].concat(items);
  return arrayItems.map((item: T) => new FormControl(item));
}
