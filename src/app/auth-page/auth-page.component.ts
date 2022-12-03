import { Component } from '@angular/core';
import {BoardService} from "../services/board.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  constructor(private board: BoardService) {
  }

  login() {
    this.board.login()
  }
}
