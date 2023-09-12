import { Injectable, InjectDecorator, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';


@Injectable({
  // this means that the roomsService is only initialized once
  // this is a global instance
  // it can be initialized more than once if you add the service to the "providers:" property in a component
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
    // {
  //   roomNumber: 1,
  //   roomType: 'Deluxe Room',
  //   amenities: 'air conditioner, Free Wi-fi, TV Bathroom',
  //   price: 500,
  //   photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //   checkinTime: new Date('11-Nov-2023'),
  //   checkoutTime: new Date('12-Nov-2023'),
  //   rating: 4.5,
  // },
  // {
  //   roomNumber: 2,
  //   roomType: 'Deluxe Room',
  //   amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen',
  //   price: 550,
  //   photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //   checkinTime: new Date('14-Nov-2023'),
  //   checkoutTime: new Date('15-Nov-2023'), 
  //   rating: 3.4,
  // },
  // {
  //   roomNumber: 3,
  //   roomType: 'Modest Room',
  //   amenities: 'air conditioner, Free Wi-fi, TV Bathroom, Kitchen, In Room SodaStream',
  //   price: 525,
  //   photos: 'https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //   checkinTime: new Date('14-Nov-2023'),
  //   checkoutTime: new Date('15-Nov-2023'),
  //   rating: 4.9, 
  // }
]

// the $ in getRooms$ tells us that it is a stream variable
// once you subscribe to data the data can't be modified
// data can only be modified inside a function
// the function that is used for this is .pipe()
getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
  // shareReplay will replay the data (x) times
  shareReplay(1)
);



// the APP_SERVICE_CONFIG has to be injected into the constructor, because it is a value provider type of service
constructor(@Inject(APP_SERVICE_CONFIG)  private config: AppConfig, private http: HttpClient) {
  console.log('Rooms Service is initialized');
  console.log(this.config.apiEndpoint)
}

// the below method has been replaced with getRooms$
  getRooms(){
    // the next line was from before the integration of the faux API
    // return this.roomList;

    // <RoomList[]> is a type of "generic"
    // it tells the method to return the data in that particular type of data
    // console.log(this.http.get<RoomList[]>('/api/rooms'));
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  // the below method places a "GET" request to the dummy json api 
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      });
      return this.http.request(request);
  }
}
