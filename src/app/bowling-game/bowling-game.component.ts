import { Component, Inject, OnInit } from '@angular/core';
import { BowlingGameService } from './bowling-game.service';

@Component({
  selector: 'bowling-game',
  templateUrl: './bowling-game.component.html',
  styleUrls: ['./bowling-game.component.css']
})
export class BowlingGameComponent {
  currentGame: any;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }

}
