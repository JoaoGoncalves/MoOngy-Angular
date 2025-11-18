import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { isAuth } from './shared/functions/is-auth';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  router = inject(Router);
  authService = inject(AuthService);

  isAuth$ = isAuth()


  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
