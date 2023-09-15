import { Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';
import { Inject } from '@angular/core';

@Injectable({
  // provides one instance for the whole application
  // minus the lazy loaded modules
  // each lazy loaded module will generate a new instance of this service
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigService Initialized');
    console.log(this.configToken);
  }
}
