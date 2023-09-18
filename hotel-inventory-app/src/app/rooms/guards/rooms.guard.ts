import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';


// this is checking the truthiness of isAdmin to see if the logged in individual can have access to the child routes of a module
export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  return inject(LoginService).isAdmin;
};
