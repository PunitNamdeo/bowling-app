import { Component, Inject, OnInit } from '@angular/core';
import { BowlingGameService } from './bowling-game.service';

@Component({
  selector: 'bowling-game',
  templateUrl: './bowling-game.component.html',
  styleUrls: ['./bowling-game.component.css']
})
export class BowlingGameComponent {
  currentGame :any;
  currentPlayer: any;
  constructor(public bowlingGameService: BowlingGameService) {
    //this.currentPlayer = bowlingGameService.currentPlayer;
    this.currentGame=bowlingGameService;
    //console.log(this.currentPlayer);
  }

}
