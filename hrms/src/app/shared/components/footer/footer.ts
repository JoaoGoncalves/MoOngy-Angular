import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isAuth } from '../../functions/is-auth';

@Component({
  selector: 'app-footer',
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  isAuth$ = isAuth();
}
