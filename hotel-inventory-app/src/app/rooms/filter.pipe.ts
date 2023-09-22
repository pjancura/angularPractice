import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[] | null, price: number | null): RoomList[] | null{
    if (rooms === null){
      return null;
    } 
    else if (price === null){
      return rooms;
    } else {
      return rooms.filter((room) => room.price >= price);
    }
  }

}
