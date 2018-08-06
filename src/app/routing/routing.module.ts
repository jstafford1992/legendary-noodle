import { ClutchComponent } from './../clutch/clutch.component';
import { ClutchesListComponent } from './../clutches-list/clutches-list.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SnakesListComponent } from '../snakes-list/snakes-list.component';
import { SnakeComponent } from '../snake/snake.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'snakes-list', component: SnakesListComponent },
  { path: 'snake/:id', component: SnakeComponent },
  { path: 'clutches-list', component: ClutchesListComponent},
  { path: 'clutch/:id', component: ClutchComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
