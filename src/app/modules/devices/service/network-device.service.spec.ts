import { TestBed } from '@angular/core/testing';

import { NetworkDeviceService } from './network-device.service';

describe('NetworkDeviceService', () => {
  let service: NetworkDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
