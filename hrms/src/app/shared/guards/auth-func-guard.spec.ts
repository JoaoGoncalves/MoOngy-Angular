import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authFuncGuard } from './auth-func-guard';

describe('authFuncGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authFuncGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
