import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CardModalComponent } from './card-modal/card-modal.component';
import { BoardService } from './services/board.service';
import { BoardComponent } from './board/board.component';
import { PriorityComponent } from './priority/priority.component';
import { InfoComponent } from './info/info.component';
import { TeacherComponent } from './teacher/teacher.component';
import {AppRoutingModule} from "./app-routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, DragDropModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CardModalComponent, BoardComponent, PriorityComponent, InfoComponent, TeacherComponent, AuthPageComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    BoardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class AppModule { }
