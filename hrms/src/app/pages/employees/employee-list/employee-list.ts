import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees-service';
import { AsyncPipe, NgFor, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, AsyncPipe, NgComponentOutlet],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees$ : any;
  isConfirmationOpen = false;
  confirmDialog: any;

  constructor(private readonly employeesService: EmployeesService){
    this.employees$ = this.employeesService.getEmployees();
  }

  async  showConfirmationDialog(){
    // importar via lazy loading , a componente confirmation Dialog
    const {ConfirmationDialog} = await import('../../../shared/components/confirmation-dialog/confirmation-dialog');
    this.confirmDialog = ConfirmationDialog;
    this.isConfirmationOpen = true
  }


}
