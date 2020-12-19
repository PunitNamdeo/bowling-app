import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BowlingRollComponent } from './bowling-roll/bowling-roll.component';
import { BowlingGameComponent } from './bowling-game/bowling-game.component';
import { BowlingScorecardComponent } from './bowling-scorecard/bowling-scorecard.component';
import { BowlingPlayerComponent } from './bowling-player/bowling-player.component';
import { BowlingService } from './services/bowling.service';
import { BowlingGameService } from './bowling-game/bowling-game.service';
import { BowlingPlayerService } from './bowling-player/bowling-player.service';
import { BowlingFrameComponent } from './bowling-frame/bowling-frame.component';
import { BowlingFrameService } from './bowling-frame/bowling-frame.service';
import { BowlingRollService } from './bowling-roll/bowling-roll.service';
import { FormsModule } from '@angular/forms';
import {RollScorePipe} from './bowling-scorecard/roll-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BowlingRollComponent,
    BowlingGameComponent,
    BowlingScorecardComponent,
    BowlingPlayerComponent,
    BowlingFrameComponent,
    RollScorePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BowlingService, BowlingGameService, BowlingPlayerService, BowlingFrameService, BowlingRollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
