import { Injectable } from '@angular/core';

@Injectable({
  // changing providedIn to null allows me to remove all calls of this service
  // as long as i have used the @Optional method and this.loggerService? whenever I inject / call for this service
  providedIn: null
})
export class LoggerService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }

}
