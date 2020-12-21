import {Component, Input} from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';

@Component({
  selector: 'app-bowling-roll',
  templateUrl: './bowling-roll.component.html',
  styleUrls: ['./bowling-roll.component.css']
})
/*
 * name: BowlingRollComponent
 * description: A component use to connect bowlingGameService.
 */
export class BowlingRollComponent  {
  currentGame: BowlingGameService;
  @Input() knocked: any;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }

}
