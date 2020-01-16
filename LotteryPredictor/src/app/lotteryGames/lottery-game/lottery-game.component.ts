import { Component, OnInit } from '@angular/core';
import { LotteryGame } from '../lotteryGame';
import { LotteryGameService } from '../lottery-game.service';

@Component({
  selector: 'app-lottery-game',
  templateUrl: './lottery-game.component.html',
  styleUrls: ['./lottery-game.component.css']
})
export class LotteryGameComponent implements OnInit {

  pageTitle = 'Lottery Games List';
  errorMessage = '';
  showImage = false;
  imageWidth = 100;
  imageMargin = 2;
  lotteryGames: LotteryGame[] = [];

  // Initializes a new LotteryGameComponent instance
  constructor(private lotteryGameService : LotteryGameService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // OnInit implementation
  ngOnInit() {
    this.lotteryGamesSubscribe();
  }

  // An Observable instance begins publishing values only when someone subscribes to it.
  // You subscribe by calling the subscribe() method of the instance, 
  // passing an observer object to receive the notifications.
  // Notification type next: A handler for each delivered value. Called zero or more times after execution starts.
  lotteryGamesSubscribe() : void {
    this.lotteryGameService.getLotteryGames().subscribe(
      {
        next: lotteryGames => {
          this.lotteryGames = lotteryGames;
        },
        error: err => this.errorMessage = err
      });   
  }
}
