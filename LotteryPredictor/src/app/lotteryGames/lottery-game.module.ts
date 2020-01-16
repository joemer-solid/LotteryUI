import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LotteryGameData } from './lotteryGame-data';
import { LotteryGameComponent } from './lottery-game/lottery-game.component';
import { HomeComponent } from '../home/home.component';
import { LotteryGameDetailComponent } from './lottery-game/lottery-game-detail.component';
import { SelectorNumbersDetailComponent } from './lottery-game/selector-numbers-detail.component';



@NgModule({
  declarations: [LotteryGameComponent, HomeComponent, LotteryGameDetailComponent, SelectorNumbersDetailComponent],
  imports: [
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(LotteryGameData),
    CommonModule,   
    RouterModule.forChild([
      { path: 'lotteryGames/lottery-game', component: LotteryGameComponent },
      { path: 'lotteryGames/lottery-game/:id', component: LotteryGameDetailComponent },])
  ]  
})
export class LotteryGameModule { }
