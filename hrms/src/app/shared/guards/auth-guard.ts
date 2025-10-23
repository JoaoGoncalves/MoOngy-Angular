import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { map } from 'rxjs';
import { isAuth } from '../functions/is-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authService = inject(AuthService);
  router = inject(Router)

  canActivate(): MaybeAsync<GuardResult> {

    return this.authService.isAuth$.pipe(
    //return isAuth().pipe(
      map( isAuth => isAuth || this.router.createUrlTree(['/login']))
    )
  }
  
}
