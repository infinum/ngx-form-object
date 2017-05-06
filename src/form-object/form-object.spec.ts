import { FormObject } from './form-object';

class MockModel {
  name: string;
  city: string;
  pet: string;
};

class MockFormObject extends FormObject {
  validators: {
    name: ['validator1', 'validator2'],
    city: 'validator1'
  };
}

describe('Form Model', () => {
  beforeEach(() => {
    const mockModel = new MockModel();
    this.formModel = new MockFormObject(mockModel, null);
  });

  it('should return validators for single form field', () => {

  });
});
