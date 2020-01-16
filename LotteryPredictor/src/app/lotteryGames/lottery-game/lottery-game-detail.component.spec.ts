import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryGameDetailComponent } from './lottery-game-detail.component';

describe('LotteryGameDetailComponent', () => {
  let component: LotteryGameDetailComponent;
  let fixture: ComponentFixture<LotteryGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
