import { Component } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';

@Component({
  selector: 'bowling-player',
  templateUrl: './bowling-player.component.html',
  styleUrls: ['./bowling-player.component.css']
})
export class BowlingPlayerComponent {
  currentGame: BowlingGameService;

  constructor(public bowlingGameService: BowlingGameService) { 
    this.currentGame = bowlingGameService;
  }

  leaveGame (name) {
    try {
      this.bowlingGameService.leave(name);
    }
    catch(e) {
        alert(e.message);
    }
  }

}
