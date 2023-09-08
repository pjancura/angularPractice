// components are your views in Angular
// app.component.ts is the "root" component


import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

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

  role = 'Admin';


  // these allow me to dynamically change DOM components or property
  // ViewChild will only access the first instance of a component
  // lines 29 - 40
  @ViewChild('name', {static: true}) name!: ElementRef;
  ngOnInit() {
    this.name.nativeElement.innerText = "Homely Hotel";
  }
  
  
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  
  // ngAfterViewInit(){
    //   const componentRef = this.vcr.createComponent(RoomsComponent);
    //   componentRef.instance.numberOfRooms = 50;
    // }
    
  @ViewChildren(RoomsListComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // ngAfterViewInit(){
  //   console.log(this.headerChildrenComponent);
  // }
}
