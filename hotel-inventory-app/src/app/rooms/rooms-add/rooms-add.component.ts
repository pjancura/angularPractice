import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'hotelInv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  room : RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    checkinTime: new Date (),
    checkoutTime: new Date (),
    rating: 0,
  }

  successMessage: string = '';

  constructor (private roomsService: RoomsService) {}

  ngOnInit (): void {}

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room Added Successfully';
      // the object inside reset() will be used to reset the form upon submission
      roomsForm.reset({
          roomType: '',
          amenities: '',
          price: 0,
          photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          checkinTime: new Date (),
          checkoutTime: new Date (),
          rating: 0,
      });
    })
  }

}
