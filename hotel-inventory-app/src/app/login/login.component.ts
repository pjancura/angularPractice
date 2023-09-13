import { Component } from '@angular/core';

@Component({
  selector: 'hotelInv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string='';
  password: string='';

  constructor () {}

  ngOnInit (): void {}

  login() {
    if(this.email ==="admin@gmail.com" && this.password==="admin"){
      alert("Login Successful");
    }
  }


}
