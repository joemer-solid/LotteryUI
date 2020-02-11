import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingPredictorComponent } from './drawing-predictor.component';

describe('DrawingPredictorComponent', () => {
  let component: DrawingPredictorComponent;
  let fixture: ComponentFixture<DrawingPredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingPredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
