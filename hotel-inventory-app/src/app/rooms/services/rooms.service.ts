import { Injectable, InjectDecorator, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';


@Injectable({
  // this means that the roomsService is only initialized once
  // this is a global instance
  // it can be initialized more than once if you add the service to the "providers:" property in a component
  providedIn: 'root'
})
export class RoomsService {
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

// the APP_SERVICE_CONFIG has to be injected into the constructor, because it is a value provider type of service
constructor(@Inject(APP_SERVICE_CONFIG)  private config: AppConfig) { 
  console.log('Rooms Service is initialized');
  console.log(this.config.apiEndpoint)
}

  getRooms(){
    return this.roomList;
  }
}
