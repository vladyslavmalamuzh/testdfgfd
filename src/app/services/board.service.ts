import { Injectable } from '@angular/core';
import { data } from '../models/data';
import { Board, Card } from '../models/board.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable()

export class BoardService {

  constructor(private http: HttpClient, private router: Router) { }

  private data:Board = data;

  private priorityCards$ = new BehaviorSubject<Card[]>(this.initializePriorityCards());
  private modalState$ = new Subject();
  public isLogin = false
  public isGuard$ = new BehaviorSubject(false)


  login(): any{
    this.isLogin = true;
    this.router.navigate(['home'])
  }
  getBoard():Board {
    return this.data;
  }


  addCard(listId, cardTitle):void {
    let list = this.data.find(list => list.id == listId);
    list.cards = [ {id:Date.now(),title:cardTitle, content:'', priority:3}, ...list.cards ];
    this.setPriorityCards();
  }


  deleteCard(listId, cardId):void {
    let list = this.data.find(list => list.id == listId);
    console.log(list);
    let card = list.cards.find(card => card.id == cardId);
    console.log(card);
    let index = list.cards.indexOf(card);
    list.cards.splice(index, 1);
    this.setPriorityCards();
  }


  updateCard(listIndex, cardIndex, newCard):void {
   this.data[listIndex].cards[cardIndex] = newCard;
   this.setPriorityCards();
  }

  addList(listName):void {
    this.data.push({'id':Date.now(), 'name': listName , 'cards':[]});
  }

  deleteList(listId):void {
    let list = this.data.find(list => list.id == listId);
    let index = this.data.indexOf(list);
    this.data.splice(index, 1);
    this.setPriorityCards();
  }

  initializePriorityCards():Card[] {
    let cards = [];
    for(let list of this.data){
      for(let card of list.cards) {
        if(card.priority === 1) {
          cards.push(card)
        }
      }
    }
    return cards;
  }

  setPriorityCards():void {
    let cards:Card[] = [];
    for(let list of this.data){
      for(let card of list.cards) {
        if(card.priority === 1) {
          cards.push(card);
        }
      }
    }
    this.priorityCards$.next(cards);
  }

  getPriorityCards() {
    return this.priorityCards$;
  }


  setModalState(bool:boolean, card:Card):void {
    let state = {
      open: bool,
      card: card
    }
    this.modalState$.next(state)
  }

  getModalState() {
    return this.modalState$;
  }


}
