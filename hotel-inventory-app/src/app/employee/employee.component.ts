import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelInv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // the below line is an example of an additional initialization of a service
  providers: [RoomsService]
})
export class EmployeeComponent {

  empName: string = 'John';

  // the @Self() will throw an error if RoomsService is not present in this application
  constructor(@Self() private roomService: RoomsService){

  }

  ngOnInit(): void {

  }



}
