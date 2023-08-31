// components are your views in Angular
// app.component.ts is the "root" component


import { Component } from '@angular/core';

@Component({
  // this is the html tag that goes into a parent / sibling to render this component 
  selector: 'hotelInv-root',
  // templateUrl a directory path to a .html file
  // replace with "template" to write pure html here
  // template: '<h1> Hello World, from inline template!</h1>',
  // for multiline html you need to use the `` (backtick) quotes
  // the above line is also valid
  templateUrl: './app.component.html',
  // same can be done with style vs styleUrls (similar to template vs templateUrl)
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-inventory-app';
}
