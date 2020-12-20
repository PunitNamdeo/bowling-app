import { Component, OnInit, Optional } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';
import { BowlingFrameService } from '../bowling-frame/bowling-frame.service';

@Component({
  selector: 'bowling-scorecard',
  templateUrl: './bowling-scorecard.component.html',
  styleUrls: ['./bowling-scorecard.component.css']
})
export class BowlingScorecardComponent {
  currentGame: BowlingGameService;
  //frame: BowlingFrameService;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
    //this.frame = BowlingFrameService.instance;
  }
}
