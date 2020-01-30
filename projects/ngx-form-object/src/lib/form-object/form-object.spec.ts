import { FormObject } from './form-object';
// tslint:disable: max-classes-per-file

class MockModel {
  public config: any = null;
  public name: string;
  public city: string;
  public pet: string;
}

class MockFormObject extends FormObject {
  public validators: {
    name: ['validator1', 'validator2'],
    city: 'validator1',
  };
}

describe('Form Model', () => {
  let formModel: MockFormObject;

  beforeEach(() => {
    const mockModel = new MockModel();
    formModel = new MockFormObject(mockModel, null);
    console.warn(formModel);
  });

  it('should return validators for single form field', () => {

  });
});
