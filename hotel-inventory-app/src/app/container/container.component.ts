import { Component, ViewChild, ContentChild, Host, Self } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelInv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // this adds a separate instance of the RoomsService
  providers: [RoomsService]
})
export class ContainerComponent {

  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;

  // @Host() can be used inside a parent component
  // children will not look above the parent component for this service 
  constructor(@Host() private roomsService: RoomsService){

  }

  ngOnInit(): void {
  }

  // this is another way to dynamically change properties / DOM elements
  // @Input and @Output is a preferred method but this works as well
  // this works with the "ng-content" tag
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Rick";
  }

  

}
