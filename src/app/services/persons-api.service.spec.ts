import { TestBed } from '@angular/core/testing';

import { PersonsApiService } from './persons-api.service';

describe('PersonsApiService', () => {
  let service: PersonsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
