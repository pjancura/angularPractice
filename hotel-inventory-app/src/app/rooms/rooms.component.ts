import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  roomList : RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'air conditioner, Free Wi-fi, TV Bathroom',
    price: 500,
    photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
    rating: 4.5,
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen',
    price: 550,
    photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    checkinTime: new Date('14-Nov-2023'),
    checkoutTime: new Date('15-Nov-2023'), 
    rating: 3.4,
  },
  {
    roomNumber: 3,
    roomType: 'Modest Room',
    amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen, In Room SodaStream',
    price: 525,
    photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    checkinTime: new Date('14-Nov-2023'),
    checkoutTime: new Date('15-Nov-2023'),
    rating: 4.9, 
  }
]

  constructor () {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
