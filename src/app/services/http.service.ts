import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  private _apiUrl = '';

  public login(userObj) {
    this.http.post(this._apiUrl + '/login', userObj).pipe(
      take(1),
    ).subscribe(

    )
  }

  public getCards() {
    this.http.get(this._apiUrl + '/cards').pipe(
      take(1),
    ).subscribe(

    )
  }

  public deleteCard(cardId) {
    this.http.delete(this._apiUrl + '/cards', {body: cardId}).pipe(
      take(1),
    ).subscribe(
    )
  }
  public createCard(card) {
    this.http.post(this._apiUrl + '/cards', card).pipe(
      take(1),
    ).subscribe(
    )
  }
  public updateCard(card) {
    this.http.patch(this._apiUrl + '/cards', card).pipe(
      take(1),
    ).subscribe(
    )
  }
}
