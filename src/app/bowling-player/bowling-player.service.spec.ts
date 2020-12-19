import { TestBed } from '@angular/core/testing';

import { BowlingPlayerService } from './bowling-player.service';

describe('BowlingPlayerService', () => {
  let service: BowlingPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
