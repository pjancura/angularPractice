import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { roomsGuard } from './guards/rooms.guard';
import { doNotLoadRoomsGuard } from './guards/do-not-load-rooms.guard';

const routes: Routes = [
  // the children property will allow whatever paths that are specified
  // to be loaded into the same view as the parent
  // as opposed to loading a separate view for the path
  { path: '', component: RoomsComponent, 
  // with canActivateChild only an "admin" type user can view the child paths
    canActivateChild: [roomsGuard],
  // with canMatch the application will only load in the files if the user is logged in
  // this is useful with lazy loaded modules 
  canMatch: [doNotLoadRoomsGuard],
  children:  [
    { path: 'add', component: RoomsAddComponent },
    { path: ':id', component: RoomsBookingComponent },
  ]}, 
  // example of dynamic path
  // this was moved to be a child path of 'rooms'
  // { path: 'rooms/:id', component: RoomsBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
