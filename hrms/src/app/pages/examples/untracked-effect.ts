import { Component, effect, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-untracked-effect',
  imports: [],
  template: `
    <p>
      untracked-effect works!
    </p>
  `,
  styles: ``
})
export class UntrackedEffect {

  dateTime = toSignal(interval(10000).pipe(map( ()=> new Date())), {initialValue: new Date()});
  numbers = toSignal( interval(1000).pipe(map( v => v)), {initialValue: 0});

  constructor(){

    effect(()=> {
      const dateTime = this.dateTime();
      //console.log(this.numbers());

      untracked( ()=> {
        console.log(this.numbers());
      })
    });

  }


}
