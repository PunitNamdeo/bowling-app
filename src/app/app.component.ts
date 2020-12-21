import {Component, HostListener} from '@angular/core';
import { BowlingGameService } from './bowling-game/bowling-game.service';
import { BowlingService } from './services/bowling.service';
import { faUserPlus, faPlayCircle, faStopCircle, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
 * name: AppComponent
 * description: Application root level class
 */
export class AppComponent {
  currentGame: any;
  newPlayer: string;
  knocked: number;
  showModal: boolean;
  content: string;
  disableStartGameButton: boolean = true;
  bottomPosToStartShowing: number = 600;
  faUserPlus = faUserPlus;
  faPlayCircle = faPlayCircle;
  faStopCircle = faStopCircle;
  faSync = faSync;
  constructor(
    public bowlingService: BowlingService,
    public bowlingGameService: BowlingGameService
  ) {
    this.newPlayer = '';
    this.knocked = 0;
    this.currentGame = bowlingGameService;
  }

  /*
   * name: startGame
   * description: To start the bowling game
   */
  startGame(): void {
    try {
      this.bowlingGameService.start();
      this.gotoBottom();
    }
    catch (e) {
      this.showModal = true;
      this.content = 'There are no players!';
    }
  }

  /*
   * name: finishGame
   * description: To end the bowling game
   */
  finishGame(): void {
    try {
      this.bowlingGameService.reset();
      this.disableStartGameButton = true;
      this.knocked = 0;
    }
    catch (e) {
      this.showModal = true;
      this.content = 'Oops :( something went wrong. Please click the Finish Game button followed by Start Game button.';
    }
  }

  /*
   * name: joinGame
   * description: To add the player in the bowling game
   */
  joinGame(): void {
    try {
        this.bowlingGameService.join(this.newPlayer);
        this.newPlayer = '';
        this.disableStartGameButton = false;
    } catch (e) {
      this.showModal = true;
      this.content = 'Player already has been added!';
    }
  }

  /*
   * name: throwBall
   * description: To roll the ball and proceed with the bowling game
   */
  throwBall(): void {
    try {
        const previous = this.bowlingGameService.previousValue;
        const value = this.bowlingService.throwBall(previous);
        this.knocked = value;
        this.bowlingGameService.play(value);
    }
    catch (e) {
      this.showModal = true;
      this.content = 'Oops :( something went wrong. Please click the Finish Game button followed by Start Game button.';
    }
  }

  /*
   * name: hide
   * description: To hide the modal
   */
  hide(): void {
    this.showModal = false;
  }

  /*
   * name: gotoBottom
   * description: To scroll down the window on start game button event
   */
  gotoBottom(): void {
    window.scroll({
      top: this.bottomPosToStartShowing,
      left: 0,
      behavior: 'smooth'
    });
  }
}
