import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BowlingRollService {
  public _frame: any;
  public _position: number;
  public _value: number;

  constructor(frame: any, position: number, value: number) {
    this._frame = frame;
    this._position = position;
    this._value = value;
  }

  get position(): number {
    return this._position;
  }

  get frame(): any {
    return this._frame;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get isFinished(): boolean {
    return this._value != null;
  }

}
