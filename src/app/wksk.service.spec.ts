import { TestBed } from '@angular/core/testing';

import { WkskService } from './wksk.service';

describe('WkskService', () => {
  let service: WkskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WkskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
