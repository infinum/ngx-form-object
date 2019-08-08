import { FormStore } from '../../form-store/form-store';

export function isFormStore(classInstance: any): boolean {
  if (!classInstance) {
    return false;
  }

  if (classInstance instanceof FormStore) {
    return true;
  }

  return isFormStore(classInstance.prototype);
}
