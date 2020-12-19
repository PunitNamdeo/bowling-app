import { Component, OnInit } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';

@Component({
  selector: 'bowling-scorecard',
  templateUrl: './bowling-scorecard.component.html',
  styleUrls: ['./bowling-scorecard.component.css']
})
export class BowlingScorecardComponent {
  currentGame: BowlingGameService;

  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }
}
