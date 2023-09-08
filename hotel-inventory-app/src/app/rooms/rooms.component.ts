import { Component, QueryList, SkipSelf, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { ViewChild } from '@angular/core';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hotelInv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  //think of the following code like a script of events
  // this will help you know whether something belongs above or below the constructor
  // i believe the constructor is when the component gets constructed

  hotelName = 'Homely Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList : RoomList[] = []

  // this allows you to view anything about the component
  // static: true means that the component is safe to access from the parent life cycle hook
  // static: false (default value), this will make it not cause errors when your code is asynchronousjj
  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;


  // private means that the service will not leak onto my template (the html)
  // the constructor should not have any blocking code (i assume this means code that would stop the component from rendering entirely)
  constructor (@SkipSelf() private roomsService: RoomsService) {}

  // life cycle hooks
  // ngOnInit() gets called after my component is initialized
  ngOnInit(): void {
    // console.log(this.headerComponent);
  //   this.roomList = [{
  //     roomNumber: 1,
  //     roomType: 'Deluxe Room',
  //     amenities: 'air conditioner, Free Wi-fi, TV Bathroom',
  //     price: 500,
  //     photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //     checkinTime: new Date('11-Nov-2023'),
  //     checkoutTime: new Date('12-Nov-2023'),
  //     rating: 4.5,
  //   },
  //   {
  //     roomNumber: 2,
  //     roomType: 'Deluxe Room',
  //     amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen',
  //     price: 550,
  //     photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //     checkinTime: new Date('14-Nov-2023'),
  //     checkoutTime: new Date('15-Nov-2023'), 
  //     rating: 3.4,
  //   },
  //   {
  //     roomNumber: 3,
  //     roomType: 'Modest Room',
  //     amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen, In Room SodaStream',
  //     price: 525,
  //     photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //     checkinTime: new Date('14-Nov-2023'),
  //     checkoutTime: new Date('15-Nov-2023'),
  //     rating: 4.9, 
  //   }
  // ]
    this.roomList = this.roomsService.getRooms();
  }

  // this is listening for any changes / events that occur inside your application
  // this is very costly to speed
  // ngOnChanges and ngDoCheck should not be implemented on the same component
  // they basically do the same thing
  // they will often record the same information
  ngDoCheck(){
    console.log('onChanges is called.')
  }

  ngAfterViewInit(){
    this.headerComponent.title = 'Rooms View';
    // the following 2 lines dynamically changes the title of the last header component
    // the @ViewChildren allows me access to this property
    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = "Last Header";
    // there is also a get(index#) method for the @ViewChildren decorator
    // example: this.headChildrenComponent.get(index#).property = ??
  }



  toggle() {
    this.hideRooms = !this.hideRooms;
    if (this.title == "Room List"){
      this.title = "Rooms List";
    } else {
      this.title = "Room List";
    }
  }

  // this is the function that receives data from the child component and handles the event
  selectRoom(room: RoomList){
    this.selectedRoom = room;  
  }

  addRoom() {
    const room: RoomList = {
        roomNumber: 4,
        roomType: 'Deluxe Room',
        amenities: 'air conditioner, Free Wi-fi, TV Bathroom',
        price: 500,
        photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 2.5,
    };
    // the ... is called the spread operator
    // it grabs all of the previous objects in the array
    // and then pushes the new room onto the end
    // we do it this way because we are returning a new array each time we add a room
    // this has to do with immutability of arrays
    this.roomList = [...this.roomList, room];
  }

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

   

}
