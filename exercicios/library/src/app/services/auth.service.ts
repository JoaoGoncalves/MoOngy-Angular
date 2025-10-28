import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  isAuth$ = new BehaviorSubject(false);


  login (credentials: {email: string, password: string}){
    this.isAuth$.next(true);
    console.log(`Login: ${credentials.email} / ${credentials.password}`);
  }

  logout (){
    this.isAuth$.next(false);
    console.log(`Foi efetuado o logout`);
  }

  getToken(){
    return uuidv4();
  }


}
