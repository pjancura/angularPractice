import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[hotelInvEmailValidator]',
  providers: [
    {
      // adding our validator into all of the validators that exist in Angular
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    }
  ]

})
export class EmailValidatorDirective implements Validator {


  constructor() { }

  // ValidationErrors is a type of Key:Val pair
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (value === null) {
      return null;
    }
    // this is just looking for the string 'test' to be present in the input element
    // it is not communicating with the login component to look for admin@gmail.com
    else if (value.includes('test')){
      return {
        invalidEmail: true,
      }
    } else {
      return null;
    }
  }

}
