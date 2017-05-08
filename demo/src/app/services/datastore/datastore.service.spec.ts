import { TestBed, inject } from '@angular/core/testing';

import { DatastoreService } from './datastore.service';

describe('DatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatastoreService]
    });
  });

  it('should ...', inject([DatastoreService], (service: DatastoreService) => {
    expect(service).toBeTruthy();
  }));
});
