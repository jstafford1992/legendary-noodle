import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { SnakesListComponent } from './snakes-list/snakes-list.component';
import { SnakeComponent } from './snake/snake.component';
import { ClutchesListComponent } from './clutches-list/clutches-list.component';
import { ClutchComponent } from './clutch/clutch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SnakesListComponent,
    SnakeComponent,
    ClutchesListComponent,
    ClutchComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
