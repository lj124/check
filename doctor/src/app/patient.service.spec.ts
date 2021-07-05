import { TestBed } from '@angular/core/testing';

import { PatientserviceService } from './patient.service';

describe('PateintserviceService', () => {
  let service: PatientserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
