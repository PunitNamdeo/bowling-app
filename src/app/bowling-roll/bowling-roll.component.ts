import {Component, Inject, Input, OnInit} from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';

@Component({
  selector: 'bowling-roll',
  templateUrl: './bowling-roll.component.html',
  styleUrls: ['./bowling-roll.component.css']
})
export class BowlingRollComponent  {
  currentGame: BowlingGameService;
  @Input() knocked: any;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }

}
