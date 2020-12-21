import {Component, Inject} from '@angular/core';
import { BowlingGameService } from './bowling-game/bowling-game.service';
import { BowlingService } from './services/bowling.service';
import { faUserPlus, faPlayCircle, faStopCircle, faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentGame: any;
  newPlayer: string;
  knocked: number;
  faUserPlus = faUserPlus;
  faPlayCircle = faPlayCircle;
  faStopCircle = faStopCircle;
  faSync = faSync;
  showModal: boolean;
  content: string;
  title: string;
  disableStartGameButton: boolean = true;
  constructor(
    public bowlingService: BowlingService,
    public bowlingGameService: BowlingGameService
  ) {
    this.newPlayer = '';
    this.knocked = 0;
    this.currentGame = bowlingGameService;
  }

  startGame(): void {
    try {
      this.bowlingGameService.start();
    }
    catch (e) {
      console.log(e.message);
    }
  }

  finishGame(): void {
    try {
      this.bowlingGameService.reset();
      this.disableStartGameButton = true;
    }
    catch (e) {
      this.showModal = true;
      console.log(e.message);
    }
  }

  joinGame(): void {
    try {
        this.bowlingGameService.join(this.newPlayer);
        this.newPlayer = '';
        this.disableStartGameButton = false;
    } catch (e) {
      console.log(e.message);
    }
  }
  throwBall(): void {
    try {
        const previous = this.bowlingGameService.previousValue;
        const value = this.bowlingService.throwBall(previous);
        this.knocked = value;
        this.bowlingGameService.play(value);
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
