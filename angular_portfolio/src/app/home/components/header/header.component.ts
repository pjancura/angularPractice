import { Component } from '@angular/core';
import { HeaderDetails } from './services/header';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerInformation : HeaderDetails = this.headerService.headerInformation;

  constructor (private headerService: HeaderService) {

  }

  ngOnInit () {
  }

}
