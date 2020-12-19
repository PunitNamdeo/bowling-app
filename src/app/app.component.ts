import {Component, Inject} from '@angular/core';
import { BowlingGameService } from './bowling-game/bowling-game.service';
import { BowlingService } from './services/bowling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentGame: any;
  newPlayer: string;
  knocked: number;

  constructor(
    public bowlingService: BowlingService,
    public bowlingGameService: BowlingGameService
  ) {
    this.newPlayer = '';
    this.knocked = 0;
    this.currentGame = bowlingGameService;
    console.log(this.currentGame);
  }

  startGame(): void {
    try {
      this.bowlingGameService.start();
    }
    catch (e) {
        alert(e.message);
    }
  }

  finishGame(): void {
    try {
      this.bowlingGameService.reset();
    }
    catch (e) {
        alert(e.message);
    }
  }

  joinGame(): void {
    try {
      /*if(event.which === 13) {*/
        this.bowlingGameService.join(this.newPlayer);
        this.newPlayer = '';
       // event.preventDefault();
     // }
    } catch (e) {
      alert(e.message);
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
        alert(e.message);
    }
  }

}
