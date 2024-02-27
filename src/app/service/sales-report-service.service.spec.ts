import { TestBed } from '@angular/core/testing';

import { SalesReportServiceService } from './sales-report-service.service';

describe('SalesReportServiceService', () => {
  let service: SalesReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
