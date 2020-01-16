import { Component, OnInit, Input, Output } from '@angular/core';
import { LotteryGame } from '../lotteryGame';
import { LotteryGameDrawing } from '../lotteryGame';
import { LotteryGameService } from '../lottery-game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WinningNumberPipe } from 'src/app/shared/winning-number.pipe';
import { IncompleteMatchSelectorPipe } from 'src/app/shared/incomplete-match-selector.pipe';
import { IncompleteMatchMultiplierPipe } from 'src/app/shared/incomplete-match-multiplier.pipe';

@Component({
  templateUrl: './lottery-game-detail.component.html',
  styleUrls: ['./lottery-game-detail.component.css'],
  providers: [WinningNumberPipe,IncompleteMatchSelectorPipe,IncompleteMatchMultiplierPipe]
})
export class LotteryGameDetailComponent implements OnInit {

  pageTitle = 'Lottery Drawing History for: ';
  errorMessage = '';
  lotteryGame: LotteryGame | undefined; 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private lotteryGameService: LotteryGameService,
    private winningNumberPipe: WinningNumberPipe, 
    private incompleteMatchSelectorPipe : IncompleteMatchSelectorPipe,
    private incompleteMatchMultiplierPipe : IncompleteMatchMultiplierPipe) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.lotteryGameDetailSubscribe(id);      
    }   
  }

  // Pipe.Transform implementations 

  buildIncompleteMatchMultiplier(lotteryGameDrawing : LotteryGameDrawing) : string {
    return this.incompleteMatchMultiplierPipe.transform(lotteryGameDrawing.drawingNumbers);
  }

  buildIncompleteMatchSelector(lotteryGameDrawing : LotteryGameDrawing) : string {
    return this.incompleteMatchSelectorPipe.transform(lotteryGameDrawing.drawingNumbers);
  }

  buildWinningNumber(lotteryGameDrawing : LotteryGameDrawing) : Array<string> {
      return this.winningNumberPipe.transform(lotteryGameDrawing.drawingNumbers);
  }


  // service observable subscribe
  lotteryGameDetailSubscribe(id: number) : void {
    this.lotteryGameService.getLotteryGame(id).subscribe(
      {
        next: lotteryGame => {
          this.lotteryGame = lotteryGame;
        },
        error: err => this.errorMessage = err
      });   
  }

}
