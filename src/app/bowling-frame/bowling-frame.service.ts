import { Injectable } from '@angular/core';
import { BowlingRollService } from '../bowling-roll/bowling-roll.service';

@Injectable({
  providedIn: 'root'
})
/*
* name: BowlingFrameService
* description: A service which add the roll in the frame.
*/
export class BowlingFrameService {
  _position: number;
  _sum: number = 0;
  _bonus: number = 0;
  _score: number = 0;
  _rolls = [];
  _frameCount: number = 10;
 constructor(position: number) {
   this._position = position;

   const rollCount = this._position < this._frameCount ? 2 : 3;
   for (let i = 1; i <= rollCount; i++) {
         const roll = new BowlingRollService(this, i, null);
         this._rolls.push(roll);
     }
 }

 get position(): number {
   return this._position;
 }

 get rolls(): any {
   return this._rolls;
 }

 get previousRoll(): void  {
   const current = this.currentRoll;

   if (current != null && current.position > 1) {
     return this._rolls[current.position - 2];
   }

   return null;
 }

 get currentRoll(): any {
   return this._rolls.find(i => !i.isFinished);
 }

 get isFinished(): boolean {
   return this.currentRoll == null;
 }

 get isStrike(): boolean {
   return this._rolls[0].value === 10;
 }

 get isSpare(): boolean {
   return this._rolls[0].value < 10 && this.isMaxScore;
 }

 get isMaxScore(): boolean {
   return this.sum === 10;
 }

 get isLast(): boolean {
   return this.position === 10;
 }

 get sum(): number {
   return this._sum;
 }

 set sum(value: number) {
   this._sum = value;
 }

 get bonus(): number {
   return this._bonus;
 }

 set bonus(value: number) {
   this._bonus = value;
 }

 get score(): number {
   return this._score;
 }

 set score(value: number) {
   this._score = value;
 }
/*
* name: play
* description: To check and provide the value based on roll position, strike and last frame.
*/
 play(knocked): void  {
   const pinCount = 10;

   const roll = this.currentRoll;
   let sum = 0;
   const isStrike = knocked === pinCount;

   if (roll === undefined || roll == null) {
     return;
   }

   roll.value = knocked;

   // sum
   for (const other of this._rolls) {
     sum += other.value || 0;
   }

   this.sum = sum;

   // Last frame
   if (this.isLast && roll.position === 2) {
       if (sum % 10 !== 0 && sum < 10) {
       this.finish();
     }
   }
   // Strike
   if (!this.isLast && isStrike  && roll.position === 1) {
     this.finish();
   }

 }
/*
* name: finish
* description: To finish the turn and reset the roll value if null.
*/
 finish(): void {
   for (const roll of this._rolls) {
     if (roll.value == null) {
       roll.value = 0;
     }
   }
 }

}
