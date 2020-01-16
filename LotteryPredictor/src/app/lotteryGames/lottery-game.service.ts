import { Injectable, Type } from '@angular/core';
import { LotteryGame } from './lotteryGame';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// When you use 'root', your injectable will be registered as a singleton in the application
// and you don’t need to add it to the providers of the root module.
// Similarly, if you use providedIn: UsersModule, the injectable is registered as a provider of the UsersModule without adding it to the providers of the module.

@Injectable({
  providedIn: 'root'
})
export class LotteryGameService {

  private lotteryGameUrl = 'api/LotteryGame'; 
  private baseUrl = 'https://localhost:44393'
  private lotteryGamesAllUrl = 'api/LotteryGame/LotteryGames';

  constructor(private http: HttpClient) { }

  // Observables are declarative—that is, you define a function for publishing values,
  // but it is not executed until a consumer subscribes to it.
  // Observable: a collection whose items populate asynchronously over time
  getLotteryGames(): Observable<LotteryGame[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/${this.lotteryGamesAllUrl}`;
    
    return this.http.get<LotteryGame[]>(url, { headers })
      .pipe(
        tap(data => console.log('getLotteryGames: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getLotteryGame(id: number): Observable<LotteryGame> {
    if (id === 0) {
      return of(this.initializeLotteryGame());
    }
    const url = `${this.baseUrl}/${this.lotteryGameUrl}/${id}`;
    return this.http.get<LotteryGame>(url)
      .pipe(
        tap(data => console.log('getLotteryGame: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // httpClient catchError implementation 
  private handleError(err : any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeLotteryGame(): LotteryGame {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      code: null,
      state: null,      
      imageUrl: null,
      drawingHistory: null
    };
  }
}
