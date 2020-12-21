import { Component } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bowling-player',
  templateUrl: './bowling-player.component.html',
  styleUrls: ['./bowling-player.component.css']
})
export class BowlingPlayerComponent {
  currentGame: BowlingGameService;
  faTrash = faTrash;
  showModal: boolean;

  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }
  leaveGame(name): void {
    try {
      this.bowlingGameService.leave(name);
    }
    catch (e) {
      this.showModal = true;
      console.log(e.message);
    }
  }

  hide(): void {
    this.showModal = false;
  }

}
