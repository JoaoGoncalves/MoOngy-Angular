
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { EmployeesService } from '../../services/employees-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credentials = {email: '', password: ''}

  constructor(
    private readonly authService: AuthService, 
    private readonly employeesService: EmployeesService){}

  submit(){
    if(this.credentials.email && this.credentials.password){
      this.authService.login(this.credentials).subscribe();
    }
  }
}
