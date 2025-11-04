import { mapToCanActivate, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EmployeesService } from './services/employees-service';
import { AuthGuard } from './shared/guards/auth-guard';
import { authFuncGuard } from './shared/guards/auth-func-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'registration',
    loadComponent: () => import('./pages/registration/registration').then((m) => m.Registration),
  },
  {
    path: 'employees',
    providers: [EmployeesService],
    /* canActivate: [authFuncGuard], */
    canActivate: mapToCanActivate([AuthGuard]),
    loadChildren: async () => {
      const m = await import('./pages/employees/employees.routes');
      return m.routes;
    },
  },
  {
    path: 'work',
    canActivate: [authFuncGuard],
    loadChildren: () => {
      return import('./pages/works/works.routes').then( m => m.routes)
    }
  },
  {
    path: 'recruitment',
    canActivate: [authFuncGuard],
    loadChildren: async () => {
      const m = await import('./pages/recruitment/recruitment.routes');
      return m.routes;
    }
  }
];
