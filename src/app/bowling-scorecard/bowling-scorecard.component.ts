import { Component } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';

@Component({
  selector: 'app-bowling-scorecard',
  templateUrl: './bowling-scorecard.component.html',
  styleUrls: ['./bowling-scorecard.component.css']
})
/*
 * name: BowlingScorecardComponent
 * description: A component use to connect with bowlingGameService.
*/
export class BowlingScorecardComponent {
  currentGame: BowlingGameService;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }
}
