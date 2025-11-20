import { Component, computed, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-untracked',
  imports: [],
  template: `
     <section>
      <p>Full Name: {{fullName()}}</p>
      <button (click)="changeUser()">Change User</button>
    </section>
  `,
  styles: ``
})
export class Untracked {

  user = signal({
    id: 1,
    firstName: 'Joao',
    lastname: 'Goncalves',
    age: 25,
  });

  dateTime = toSignal(interval(900).pipe(map( ()=> new Date())), {initialValue: new Date()});


  fullName = computed( () => {
    console.log('Atualização do  computed signal');
    const dateTime = untracked(this.dateTime)
    return `${this.user().firstName} ${this.user().lastname}, last modified at ${dateTime.toLocaleString()}`;
  })

  changeUser(){
    this.user.update( val => ({
      ...val, 
      age: 25,
    }))
  }

}