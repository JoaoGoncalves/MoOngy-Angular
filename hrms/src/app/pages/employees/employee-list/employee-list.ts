import { Component, inject } from '@angular/core';
import { EmployeesService } from '../../../services/employees-service';
import { AsyncPipe, NgFor, NgComponentOutlet } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, AsyncPipe, NgComponentOutlet, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  private readonly employeesService = inject(EmployeesService)
  employees$ = this.employeesService.getEmployees();
  
  isConfirmationOpen = false;
  confirmDialog: any;

  /* constructor(private readonly employeesService: EmployeesService){
    this.employees$ = this.employeesService.getEmployees();
  } */

  async  showConfirmationDialog(){
    // importar via lazy loading , a componente confirmation Dialog
    const {ConfirmationDialog} = await import('../../../shared/components/confirmation-dialog/confirmation-dialog');
    this.confirmDialog = ConfirmationDialog;
    this.isConfirmationOpen = true
  }


}
