import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler{
    handleError(error: any): void {

        // this could be logged out to a logger where you could retrieve the errors that your users are encountering
        console.log(error);
    }
}