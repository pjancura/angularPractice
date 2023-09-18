// this implementation differs from how it is presented in the
// freeCodeCamp "Angular for  Beginners Course [Full Front End Tutorial with TypeScript]"

// a class guard.ts is now deprecated 
// (the date i tried to complete this section was September 15, 2023)

// i will do my best to make this functional based on the information from the video


import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  // the return statement is a ternary operation
  // that says if isLoggedIn is "True", return "True" ; else: return the .navigate()
  return inject(LoginService).isLoggedIn? true: inject(Router).navigate(['/login']);
};
