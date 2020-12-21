import { Component } from '@angular/core';
import { BowlingGameService } from './bowling-game.service';

@Component({
  selector: 'app-bowling-game',
  templateUrl: './bowling-game.component.html',
  styleUrls: ['./bowling-game.component.css']
})
/*
* name: BowlingGameComponent
* description: A component which connect to the bowlingGameService.
*/
export class BowlingGameComponent {
  currentGame: any;
  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }
}
