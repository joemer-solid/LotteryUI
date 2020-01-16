import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNumbersDetailComponent } from './selector-numbers-detail.component';

describe('SelectorNumbersDetailComponent', () => {
  let component: SelectorNumbersDetailComponent;
  let fixture: ComponentFixture<SelectorNumbersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorNumbersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorNumbersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
