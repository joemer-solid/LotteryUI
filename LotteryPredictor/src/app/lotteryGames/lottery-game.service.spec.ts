import { TestBed } from '@angular/core/testing';

import { LotteryGameService } from './lottery-game.service';

describe('LotteryGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotteryGameService = TestBed.get(LotteryGameService);
    expect(service).toBeTruthy();
  });
});
