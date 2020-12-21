import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
 * name: BowlingService
 * description: A service to get the random number of pins fallen
 */
export class BowlingService {
  config = {
    pinCount: 10
  };
  constructor() {
  }

/*
 * name: throwBall
 * description: To get random number of pins fallen after the ball has thrown.
 */
  throwBall(knocked): any {
    if (knocked === this.config.pinCount) {
      return 0;
    }
    const max = this.config.pinCount - knocked;
    const result = Math.floor(Math.random() * max) + 1;
    return result;
  }
}
