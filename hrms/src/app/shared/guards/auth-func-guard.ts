import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { map } from 'rxjs';

export const authFuncGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuth$.pipe(
    map((isAuth) => isAuth || router.createUrlTree(['/login']))
  );
};
