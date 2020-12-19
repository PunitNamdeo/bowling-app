import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingRollComponent } from './bowling-roll.component';

describe('BowlingRollComponent', () => {
  let component: BowlingRollComponent;
  let fixture: ComponentFixture<BowlingRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingRollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
