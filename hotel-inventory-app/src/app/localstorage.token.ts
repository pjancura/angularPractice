// do not add anything secure in here
// another example to use would be sessionStorage
// use window. to see other options

import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storage',{
    providedIn: 'root',
    factory(){
        return localStorage;
    }
})