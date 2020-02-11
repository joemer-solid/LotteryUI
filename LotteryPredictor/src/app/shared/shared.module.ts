import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinningNumberPipe } from './winning-number.pipe';
import { IncompleteMatchSelectorPipe } from './incomplete-match-selector.pipe';
import { IncompleteMatchMultiplierPipe } from './incomplete-match-multiplier.pipe';
import { DrawingPredictorComponent } from './drawing-predictor.component';

@NgModule({
  imports: [
    CommonModule   
  ],
  declarations: [WinningNumberPipe, IncompleteMatchSelectorPipe, IncompleteMatchMultiplierPipe, DrawingPredictorComponent], 
  exports: [WinningNumberPipe, IncompleteMatchMultiplierPipe, IncompleteMatchMultiplierPipe]
})
export class SharedModule { }
