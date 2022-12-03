import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {InfoComponent} from "./info/info.component";
import {TeacherComponent} from "./teacher/teacher.component";

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'info', component: InfoComponent, canActivate: [AuthGuard]},
  {path:'teacher', component: TeacherComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
