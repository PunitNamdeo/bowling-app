import { TestBed } from '@angular/core/testing';

import { BowlingRollService } from './bowling-roll.service';

describe('BowlingRollService', () => {
  let service: BowlingRollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingRollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
