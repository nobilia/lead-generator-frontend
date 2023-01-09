import { TestBed } from '@angular/core/testing';

import { AvailableLeadsService } from './available-leads.service';

describe('AvailableLeadsService', () => {
  let service: AvailableLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
