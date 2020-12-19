import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingPlayerComponent } from './bowling-player.component';

describe('BowlingPlayerComponent', () => {
  let component: BowlingPlayerComponent;
  let fixture: ComponentFixture<BowlingPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
