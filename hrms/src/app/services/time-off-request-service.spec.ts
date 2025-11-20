import { TestBed } from '@angular/core/testing';

import { TimeOffRequestService } from './time-off-request-service';

describe('TimeOffRequestService', () => {
  let service: TimeOffRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeOffRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
