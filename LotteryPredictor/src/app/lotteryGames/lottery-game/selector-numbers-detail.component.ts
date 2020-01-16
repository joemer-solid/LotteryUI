import { Component, Input, OnInit } from '@angular/core';
import { LotteryGameDrawing } from '../lotteryGame';

@Component({
  selector: 'app-selector-numbers-detail',
  templateUrl: './selector-numbers-detail.component.html',
  styleUrls: ['./selector-numbers-detail.component.css', 
  './lottery-game-detail.component.css']
})
export class SelectorNumbersDetailComponent implements OnInit {

  @Input() selectorNumbersSequence:  Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
