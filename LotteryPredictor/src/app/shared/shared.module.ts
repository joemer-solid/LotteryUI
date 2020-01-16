import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinningNumberPipe } from './winning-number.pipe';
import { IncompleteMatchSelectorPipe } from './incomplete-match-selector.pipe';
import { IncompleteMatchMultiplierPipe } from './incomplete-match-multiplier.pipe';

@NgModule({
  imports: [
    CommonModule   
  ],
  declarations: [WinningNumberPipe, IncompleteMatchSelectorPipe, IncompleteMatchMultiplierPipe], 
  exports: [WinningNumberPipe, IncompleteMatchMultiplierPipe, IncompleteMatchMultiplierPipe]
})
export class SharedModule { }
