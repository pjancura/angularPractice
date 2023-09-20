import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'hotelInv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm!: FormGroup;

  get guests(): FormArray {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor (private configService: ConfigService, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      // roomId: demonstrates a different syntax from ['']
      // both will leave the object property as an empty string
      // using FormControl, properties of the element can be maniulated from here
      roomId: new FormControl({ value: '2', disabled: true}, [Validators.required]),
      guestEmail: ['',[Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['',[Validators.required, Validators.minLength(5)]],
      // address is a nested form 
      // look at the .html to see how to access these values
      address: this.fb.group({
        guestAddressLine1: ['', [Validators.required]],
        guestAddressLine2: [''],
        guestCity: ['', [Validators.required]],
        guestState: ['', [Validators.required]],
        guestCountry: [''],
        guestZipCode: [''],
      }),
      guests: this.fb.array([this.addGuestControl()]),
      // below was before the dynamic implentation
      // guestCount: [''],
      // guestList: ['']
      termsAndConditions: new FormControl(false, [Validators.requiredTrue]),
      // this is an example of modifying the valueChanges stream for the entire form
    }, {updateOn: 'blur'});

    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) =>
    console.log(data));
  }


  addBooking() {
    // this will console.log the values of the form in JSON format
    // .getRawValue will pull the value from a FormControl even if it is disabled
    console.log(this.bookingForm.getRawValue());

    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',      
      address: {
        guestAddressLine1: '',
        guestAddressLine2: '',
        guestCity: '',
        guestState: '',
        guestCountry: '',
        guestZipCode: '',
      },
      guests: [],
      termsAndConditions: false,
    });


  }


  // setValue() requires all of the properties to be defined
  // patchValue() only requires the properites you want to modify
  getBookingData() {
    this.bookingForm.setValue({
      roomId: '2',
      guestEmail: 'test@mail.com',
      checkinDate: new Date('2023-10-24'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',      
      address: {
        guestAddressLine1: '',
        guestAddressLine2: '',
        guestCity: '',
        guestState: '',
        guestCountry: '',
        guestZipCode: '',
      },
      guests: [{
        guestName: '',
        age: ''
    }],
      termsAndConditions: false,
    } );
  }

  // this adds another guest  to the guests[] property of the bookingForm
  addGuest(){
    this.guests.push(
      this.addGuestControl()
    );
  }

  addGuestControl() {
    return this.fb.group({ 
      // below with "updateOn:" shows how to modify the frequency with which changes are passed through the data stream
      guestName: new FormControl('',{ updateOn: 'blur', validators: [Validators.required, Validators.minLength(5)]}),
      age: new FormControl('')
    });
  }

  removeGuest(i:number){
    this.guests.removeAt(i);
  };

  // this is an example of addControl
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  };

  // this is an example of deleteControl
  deletePassport() {
    if (this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  };

  getErrorMessage(propertyPath: any): string {
     // console.log("getErrorMessage()", propertyPath?.errors);
    if (propertyPath?.hasError('required')) {
      return 'You must enter a value';
    }
    else if (propertyPath?.hasError('minlength')){
      return 'Name should be at least 5 characters';
    } else {
      return '';
    };
  };

}
