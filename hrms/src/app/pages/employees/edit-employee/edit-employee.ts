import { Component, DestroyRef, inject } from '@angular/core';
import { PermissionsService } from '../../../services/permissions-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeForm } from '../../../infrastructure/types/employee-form';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css'
})
export class EditEmployee {
  permissionsService = inject(PermissionsService);
  destroyRef = inject(DestroyRef);

  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    position: new FormControl('', { nonNullable: true }),
    level: new FormControl('', { nonNullable: true }),
  });


  ngOnInit(): void {
   this.permissionsService.hasPermission('EditEmployeePrivateDetails')
     .pipe( takeUntilDestroyed(this.destroyRef)) // boa practica de dessubscrever qualquer subscricao 
     .subscribe(hasPermission => {
      if (!hasPermission) {
        this.form.controls.firstName.disable();
        this.form.controls.lastName.disable();
        this.form.controls.email.disable();
      } else {
        this.form.controls.firstName.enable();
        this.form.controls.lastName.enable();
        this.form.controls.email.enable();
      }
    });
    
  }
  /* constructor(){
    this.permissionsService.hasPermission('EditEmployeePrivateDetails')
     .pipe( takeUntilDestroyed()) // boa practica de dessubscrever qualquer subscricao 
     .subscribe(hasPermission => {
      if (!hasPermission) {
        this.form.controls.firstName.disable();
        this.form.controls.lastName.disable();
        this.form.controls.email.disable();
      } else {
        this.form.controls.firstName.enable();
        this.form.controls.lastName.enable();
        this.form.controls.email.enable();
      }
    });
  } */
}
