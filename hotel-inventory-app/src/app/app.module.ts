import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';

// any module you have created goes here
// @NgModule is a decorator
//    it is giving the compiler all the necessary information to compile correctly
@NgModule({
  // component, directive, pipes must be written in "declarations"
  declarations: [
    AppComponent,
    RoomsComponent
  ],
  // any Angular module must be imported into "imports"
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // 
  bootstrap: [AppComponent]
})
export class AppModule { }
