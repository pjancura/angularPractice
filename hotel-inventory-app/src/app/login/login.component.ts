import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hotelInv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string='';
  password: string='';

  constructor (private route: Router, private loginService: LoginService) {}

  ngOnInit (): void {}


  // the below code was moved to the login.service.ts file
  // login() {
  //   if(this.email ==="admin@gmail.com" && this.password==="admin"){
  //     // navigate() tells the router which path to use
  //     // it creates the URL for us
  //     // this.route.navigate(['/rooms', 'add'])
  //     // navigateByUrl() we supply the URL to use
  //     this.route.navigateByUrl('/rooms/add');
  //   }
  // }

  login() {
    if(this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms']);
    }
  }


}
