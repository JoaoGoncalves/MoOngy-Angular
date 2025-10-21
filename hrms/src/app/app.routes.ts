import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EmployeesService } from './services/employees-service';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'registration',
    loadComponent: () => import('./pages/registration/registration').then((m) => m.Registration),
  },
  {
    path: 'employees',
    providers: [EmployeesService],
    loadChildren: async () => {
      const m = await import('./pages/employees/employees.routes');
      return m.routes;
    },
  },
  /* {
        path: 'employees', 
        providers: [EmployeesService],
        loadChildren: () => {
            return import('./pages/employees/employees.routes')
                .then(
                    m => m.routes
                )
        }
    } */
];
