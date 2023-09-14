import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  // exports makes the components listed in it available to the other module in which it is imported into
  exports:[
    HeaderComponent,
  ]
})
export class HeaderModule { }
