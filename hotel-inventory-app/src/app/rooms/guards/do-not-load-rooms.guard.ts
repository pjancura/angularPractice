import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const doNotLoadRoomsGuard: CanMatchFn = (route, segments) => {
  console.log(inject(LoginService).isLoggedIn);
  return inject(LoginService).isLoggedIn;
};
