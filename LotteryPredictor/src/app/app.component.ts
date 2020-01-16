import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lottery Predictor';
  navbarOpen : boolean;

  // Methods
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // OnInit implementation
  ngOnInit(){
     this.navbarOpen = false;
  }

}
