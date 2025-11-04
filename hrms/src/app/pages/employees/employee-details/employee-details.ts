import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../infrastructure/types/employee';
import { Truncate } from "../../../shared/directives/truncate";

@Component({
  selector: 'app-employee-details',
  imports: [Truncate],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
  employee = inject(ActivatedRoute).snapshot.data['employee'] as Employee;
}
