import { TestBed } from '@angular/core/testing';

import { GetDoctorService } from './get-doctor.service';

describe('GetDoctorService', () => {
  let service: GetDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
