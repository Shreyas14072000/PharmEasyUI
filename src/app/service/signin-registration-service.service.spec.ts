import { TestBed } from '@angular/core/testing';

import { SigninRegistrationServiceService } from './signin-registration-service.service';

describe('SigninRegistrationServiceService', () => {
  let service: SigninRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
