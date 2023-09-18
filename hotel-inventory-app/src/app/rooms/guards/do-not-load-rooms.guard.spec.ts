import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { doNotLoadRoomsGuard } from './do-not-load-rooms.guard';

describe('doNotLoadRoomsGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => doNotLoadRoomsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
