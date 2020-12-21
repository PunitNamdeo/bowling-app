import { Pipe, PipeTransform } from '@angular/core';
/*
 * name: RollScorePipe
 * description: Pipe for map score based on value, strike and spare.
*/
@Pipe({name: 'rollScore', pure: false})
export class RollScorePipe implements PipeTransform {
  transform(roll: any ): any {
    const value = roll.value;
    if (value === undefined || value == null || value <= 0) {
      return '-';
    }

    if (roll.frame.isStrike && value === 10) {
      return 'X';
    }

    if (roll.position === 2 && roll.frame.isSpare) {
      return '/';
    }
    return value;
  }
}
