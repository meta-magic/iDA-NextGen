import { TestBed } from '@angular/core/testing';

import { PortSummaryService } from './port-summary.service';

describe('PortSummaryService', () => {
  let service: PortSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
