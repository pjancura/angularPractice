import { Component } from '@angular/core';

@Component({
  selector: 'hotelInv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  empName: string = 'John';

  constructor(){

  }

  ngOnInit(): void {

  }



}
