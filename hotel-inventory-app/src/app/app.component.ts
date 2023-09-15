// components are your views in Angular
// app.component.ts is the "root" component


import { Component, ElementRef, Optional, QueryList, ViewChild, ViewChildren, ViewContainerRef, OptionalDecorator, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

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

  constructor (@Optional() private loggerService: LoggerService, 
  @Inject(localStorageToken) private localStorage: Storage, 
  private initService: InitService, 
  private configService: ConfigService) {
    console.log(initService.config);
  }


  // these allow me to dynamically change DOM components or property
  // ViewChild will only access the first instance of a component
  @ViewChild('name', {static: true}) name!: ElementRef;
  ngOnInit() {
    this.name.nativeElement.innerText = "Homely Hotel";
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.localStorage.setItem('name', 'Homely Hotel');
  }
  
  
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  
  // ngAfterViewInit(){
    //   const componentRef = this.vcr.createComponent(RoomsComponent);
    //   componentRef.instance.numberOfRooms = 50;
    // }
    

  // ngAfterViewInit(){
  //   console.log(this.headerChildrenComponent);
  // }
}
