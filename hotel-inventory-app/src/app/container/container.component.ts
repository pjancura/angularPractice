import { Component, ViewChild, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hotelInv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;

  constructor(){

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
