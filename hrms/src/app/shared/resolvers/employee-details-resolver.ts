import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EmployeesService } from '../../services/employees-service';
import { Employee } from '../../infrastructure/types/employee';

export const employeeDetailsResolver: ResolveFn<Employee> = (route, state) => {
  const employeesService = inject(EmployeesService);
  const id = +(route.paramMap.get('id') ?? 0);

  return employeesService.getEmployee(id);
};
