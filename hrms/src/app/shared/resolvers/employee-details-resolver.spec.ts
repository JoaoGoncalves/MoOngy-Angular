import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { employeeDetailsResolver } from './employee-details-resolver';

describe('employeeDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => employeeDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
