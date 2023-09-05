import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hotelInv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Homely Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  constructor () {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
