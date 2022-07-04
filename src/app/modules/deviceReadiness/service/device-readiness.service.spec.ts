import { TestBed } from '@angular/core/testing';

import { DeviceReadinessService } from './device-readiness.service';

describe('DeviceReadinessService', () => {
  let service: DeviceReadinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceReadinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
