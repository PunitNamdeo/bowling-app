import {Component, Inject, Input, OnInit} from '@angular/core';
import {BowlingRollComponent} from '../bowling-roll/bowling-roll.component';

@Component({
  selector: 'bowling-frame',
  templateUrl: './bowling-frame.component.html',
  styleUrls: ['./bowling-frame.component.css']
})
export class BowlingFrameComponent  {
  @Input() frame: any;
  constructor() {}
}
