// this will be an example of dynamically loading a component into your application
// 

import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hotelInv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = ''

  constructor (private configService: ConfigService) {
    
  }

}
