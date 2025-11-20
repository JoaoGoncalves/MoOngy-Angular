import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../infrastructure/types/employee';

@Injectable(/* {
  providedIn: 'root'
} */)
export class EmployeesService {

  /* constructor(private readonly http: HttpClient){} */
  private readonly http = inject(HttpClient);

  getEmployees(){
    return this.http.get<Employee[]>('/employees')
  }


  getEmployee(id: number){
    return this.http.get<Employee>(`/employees/${id}`)
  }


}
