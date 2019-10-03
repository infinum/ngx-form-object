import { FormModel } from '../interfaces/form-model.interface';
import { FormObject } from './form-object';
// tslint:disable: max-classes-per-file

class MockModel implements FormModel {
  config: any = null;
  name: string;
  city: string;
  pet: string;
}

class MockFormObject extends FormObject {
  validators: {
    name: ['validator1', 'validator2'],
    city: 'validator1'
  };
}

describe('Form Model', () => {
  let formModel: MockFormObject;

  beforeEach(() => {
    const mockModel = new MockModel();
    formModel = new MockFormObject(mockModel, null);
  });

  it('should return validators for single form field', () => {

  });
});
