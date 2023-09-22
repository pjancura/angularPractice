import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { RoomList } from '../rooms';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'hotelInv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // this will detect changes to objects and events that will affect the display of our DOM
  // this helps to only update what has been changed and not affect what has already been rendered (if i understand correctly)
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent {
  // the below line gets the data from the onInit function in the parent component
  // rooms needs to be of type RoomList[] | null so that the async pipe will work and not throw an error
  @Input() rooms: RoomList[] | null = [];
  
  @Input() title: string = '';

  @Input() price : number | null = 0;
  
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  constructor () {
    
  }
  // can only be applied to component or directive with the @Input property
  // SimpleChange can have the property of preciousValue, currentValue, or firstchange
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }


  // this function passes the event back to the parent component so that it can be handled
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  // this life cycle event is called whenever a DOM element is removed 
  // this can be used to stop processes
  ngOnDestroy() {
    console.log('onDestroy is called');
  }

}
