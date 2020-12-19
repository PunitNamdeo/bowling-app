import { TestBed } from '@angular/core/testing';

import { BowlingFrameService } from './bowling-frame.service';

describe('BowlingFrameService', () => {
  let service: BowlingFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
