import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';

const routes: Routes = [
  // the children property will allow whatever paths that are specified
  // to be loaded into the same view as the parent
  // as opposed to loading a separate view for the path
  { path: '', component: RoomsComponent, children:  [
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
