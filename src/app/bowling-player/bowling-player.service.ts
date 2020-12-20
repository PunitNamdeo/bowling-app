import { Injectable } from '@angular/core';
import { BowlingFrameService } from '../bowling-frame/bowling-frame.service';

@Injectable({
  providedIn: 'root'
})
export class BowlingPlayerService {
  _position: number;
  _name: string;
  _frames = [];
  _isStarted: number = 0;
  _score: number = 0;
  _frameCount = 10;

  constructor(name: string, position: number) {
    this._position = position || 0;
    this._name = name;

    for (let i = 1; i <= this._frameCount; i++) {
      const frame = new BowlingFrameService(i);
      this._frames.push(frame);
    }
  }
  get position(): number {
    return this._position;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get frames(): any {
    return this._frames;
  }

  get rolls(): any {
    let rolls = [];
    for (const frame of this._frames) {
      rolls = rolls.concat(frame.rolls);
    }
    return rolls;
  }

  get currentFrame(): any {
    return this._frames.find(f => !f.isFinished);
  }

  get currentRoll(): any {
    if (!this.currentFrame) {
      return null;
    }

    return this.currentFrame.currentRoll;
  }

  get isFinished(): boolean {
    return this.currentFrame == null;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  play(knocked): void {
    this.currentFrame.play(knocked);
    this.calc();
  }

  calc(): void {
    let sum = 0;
    const frames = this._frames;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < frames.length; i++) {
      const bonus = 0;
      const frame = frames[i];

      if (frame.isFinished) {

        if (frame.isMaxScore) {
          // tslint:disable-next-line:no-shadowed-variable
          const firstFrame = frames.find(i => i.position === frame.position + 1);
          // tslint:disable-next-line:no-shadowed-variable
          const secondFrame = frames.find(i => i.position === frame.position + 2);

          let firstValue = 0;
          let secondValue = 0;

          if (firstFrame != null) {
            firstValue = firstFrame.rolls[0].value || 0;

            if (frame.isStrike) {
              if (!firstFrame.isStrike) {
                secondValue = firstFrame.rolls[1].value || 0;
              }
              else if (secondFrame != null) {
                secondValue = secondFrame.rolls[0].value || 0;
              }
            }
          }

          frame.bonus = firstValue + secondValue;
        }

        sum += frame.sum + frame.bonus;

        frame.score = sum;
      }
    }

    this.score = sum;
  }
}
