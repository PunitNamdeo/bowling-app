import { Injectable } from '@angular/core';
import { BowlingPlayerService } from '../bowling-player/bowling-player.service';

@Injectable({
  providedIn: 'root'
})
export class BowlingGameService {
  _isStarted: boolean = false;
  _players = [];
  _currentTurn: number = 0;
  constructor() {
    this.reset();
  }

  get isStarted(): boolean  {
    return this._isStarted;
  }

  get isFinished(): boolean {
    const pending = this._players.find(i => !i.isFinished);
    return pending == null;
  }

  get players(): any  {
    return this._players;
  }

  get hasPlayers(): boolean {
    return this._players.length > 0;
  }

  get currentPlayer(): any {
    if (!this.hasPlayers) {
      return null;
    }

    return this._players[this._currentTurn];
  }

  get currentFrame(): any {
    if (!this.currentPlayer) {
      return null;
    }

    return this.currentPlayer.currentFrame;
  }

  get currentRoll(): any {
    if (!this.currentFrame) {
      return null;
    }

    return this.currentFrame.currentRoll;
  }

  get previousValue(): any {
    if (!this.currentFrame || !this.currentFrame.previousRoll) {
      return 0;
    }

    return this.currentFrame.previousRoll.value;
  }

  start(): void {
    if (!this.hasPlayers) {
      throw new Error('There are no players!');
    }

    this._isStarted = true;
  }

  reset(): void {
    this._isStarted = false;
    this._players = [];
    this._currentTurn = 0;
  }

  play(knocked): void  {
    if (this.isFinished) {
      throw new Error('The game has finished!');
    }

    this.currentPlayer.play(knocked);

    if (this._currentTurn < this._players.length - 1) {
      this._currentTurn++;
    }
    else {
      this._currentTurn = 0;
    }
  }

  join(playerName): any {
    const index = this._players.findIndex(i => i.name === playerName);

    if (playerName === undefined || playerName === '' || playerName.trim() === '') {
      throw new Error('Name cannot be empty!');
    }

    if (index < 0) {
      const player = new BowlingPlayerService(playerName, this._players.length + 1);
      this._players.push(player);
    }
    else {
      throw new Error('Player already added!');
    }
  }

  leave(playerName): void {
    const index = this._players.findIndex(i => i.name === playerName);

    if (index < 0) {
      throw new Error('Player not found!');
    }
    else {
      this._players.splice(index, 1);
    }
  }
}
