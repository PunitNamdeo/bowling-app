import { Component } from '@angular/core';
import { BowlingGameService } from '../bowling-game/bowling-game.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bowling-player',
  templateUrl: './bowling-player.component.html',
  styleUrls: ['./bowling-player.component.css']
})
/*
* name: BowlingPlayerComponent
* description: A component is use to connect with bowlingGameService
*/
export class BowlingPlayerComponent {
  currentGame: BowlingGameService;
  faTrash = faTrash;
  showModal: boolean = false;
  content: string = '';

  constructor(public bowlingGameService: BowlingGameService) {
    this.currentGame = bowlingGameService;
  }
/*
* name: leaveGame
* description: To leave the bowling game before starting the game and after joining the game.
*/
  leaveGame(name): void {
    try {
      this.bowlingGameService.leave(name);
    }
    catch (e) {
      this.showModal = true;
      this.content = 'Player not found!';
    }
  }

/*
* name: hide
* description: To hide the modal
*/
  hide(): void {
    this.showModal = false;
  }

}
