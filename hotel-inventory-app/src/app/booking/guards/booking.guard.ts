import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.bookingForm.pristine){
    return component.bookingForm.pristine;
  } else {
    // this isn't a full implementation of the SnackBar
    // some code would have to be written so that when 'DISCARD' is clicked 
    // navigation away from the page is now allowed
    inject(MatSnackBar).open('You have unsaved changes!', 'DISCARD')
    return false;
  }

  
};
 