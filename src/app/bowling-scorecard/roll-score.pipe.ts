import { Pipe, PipeTransform } from '@angular/core';
import {BowlingFrameService} from '../bowling-frame/bowling-frame.service';
import { BowlingPlayerService } from '../bowling-player/bowling-player.service';
/*
 * Filter for roll score based on value, strike and spare.
 *
*/
@Pipe({name: 'rollScore',pure: false})
export class RollScorePipe implements PipeTransform {

  
  
 /*constructor(public bowlingFrameService: BowlingFrameService) {
    this._roll = bowlingFrameService._rolls;
  }*/
  // tslint:disable-next-line:typedef
  /* static factory(input){
    const filter = new RollScorePipe(input);
    return filter.transform();
  }*/
  transform(roll: any ): any {
    //const roll = this._roll;
    const value = roll.value;
    if (value === undefined || value == null || value <= 0) {
      return '-';
    }

    if (roll.frame.isStrike) {
      return 'X';
    }

    if (roll.position === 2 && roll.frame.isSpare) {
      return '/';
    }
    return value;
  }
}
/*export class RollScoreFilter {
  constructor(input) {
    // @ts-ignore
    this._roll = input;
  }

  // tslint:disable-next-line:typedef
  static factory(input) {
    const filter = new RollScoreFilter(input);
    return filter.format();
  }

  format(): any {

    // @ts-ignore
    const roll = this._roll;
    const value = roll.value;

    if (value === undefined || value == null || value <= 0) {
      return '-';
    }

    if (roll.frame.isStrike) {
      return 'X';
    }

    if (roll.position === 2 && roll.frame.isSpare) {
      return '/';
    }

    return value;
  }
}*/
