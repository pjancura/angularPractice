import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoadChildren } from '@angular/router';

import { LoginComponent } from './login/login.component';

// this works like a switch statement
// the URL will stop at whatever it matches to first among the paths
const routes: Routes = [
  // the next line creates a root route for your application, this is "default route"
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // these paths will append the localhost://4200/...
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m=> m.RoomsModule),},
  { path: 'login', component: LoginComponent },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  // the following path is called a WildCard route, this is for redirecting after a mistyped route
  { path:'**', component: NotfoundComponent },

];

@NgModule({
  // do not configure forRoot multiple times
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
