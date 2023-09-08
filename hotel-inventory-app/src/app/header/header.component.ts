// this will be an example of dynamically loading a component into your application
// 

import { Component } from '@angular/core';

@Component({
  selector: 'hotelInv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = ''
}
