import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// line 4 is the import for HttpClientModule this allows you to communicate with your API's 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// reason is found in declarations
// import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './email-validator/email-validator.directive';
import { RoomsModule } from './rooms/rooms.module';


// you can call multiple service in this function
// this function will be called before your app is initialized
function initFactory(initService: InitService) {
  return () => initService.init();
}

// any module you have created goes here
// @NgModule is a decorator
//    it is giving the compiler all the necessary information to compile correctly
@NgModule({
  // component, directive, pipes must be written in "declarations"
  declarations: [
    AppComponent,
    // HeaderComponent is removed because it can only be declared in one module
    // HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
  ],
  // any Angular module must be imported into "imports"
  imports: [
    BrowserModule,
    // this registers the RoomsModule into the parent app.module
    // remember routes are accessed top to bottom so any "featureModule" like RoomsModule that has its own routing
    // needs to be imported before the AppRoutingModule
    RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG,
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  },{
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true,
  }],
  // 
  bootstrap: [AppComponent]
})
export class AppModule { }
