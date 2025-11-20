import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-observable-component',
  imports: [],
  template: `
    <p>
      to-observable-component works!
    </p>
  `,
  styles: ``
})
export class ToObservableComponent {

  count = signal(0);
  count$ = toObservable(this.count)

  constructor(){
   /*  this.count$.subscribe(console.log);
    setInterval( () => this.count.update( v => v + 1), 1000); */
    this.count$.subscribe(console.log);
    this.count.set(1);
    this.count.set(2);
    this.count.set(3);
  }

}
