import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LotteryGameModule } from './lotteryGames/lottery-game.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    NgbModule,
    RouterModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),   
    LotteryGameModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }