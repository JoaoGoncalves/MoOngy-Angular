import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-equality',
  imports: [],
  template: `
    <section>
      <p>Full Name: {{fullName()}}</p>
      <button (click)="changeUser()">Change User</button>
    </section>
  `,
  styles: ``
})
export class SignalEquality {

  user = signal({
    id: 1,
    firstName: 'Joao',
    lastname: 'Goncalves',
    age: 25,
  }, {
    equal: (previous, current) => {
      //return previous.id === current.id
      return previous.age === current.age
    }
  });


  fullName = computed( () => {
    console.log('Atualização do  computed signal');
    return `${this.user().firstName} ${this.user().lastname}`;
  })

  changeUser(){
    this.user.update( val => ({
      ...val, 
      age: 45,
    }))
  }

}
