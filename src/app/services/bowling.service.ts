import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {
  config = {
    frameCount: 10,
    pinCount: 10
  };
  constructor() {
  }

  throwBall(knocked): any {
    if (knocked === this.config.pinCount) {
      return 0;
    }

    const max = this.config.pinCount - knocked;
    const result = Math.floor(Math.random() * max) + 1;
    return result;
  }
}
