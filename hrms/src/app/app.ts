import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";
import { FileUpload } from "./shared/components/file-upload/file-upload";
import { BehaviorSubject, filter, from, interval, map, Observable, of, Subject, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer/* , FileUpload */],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  constructor(){

    /* const count = signal(0);
    const increment = () => count.update( v => v + 1 );

    const doubleCount = computed( () => count() * 2 );

    console.log(count());
    console.log(doubleCount());
    increment();
    console.log(count());
    console.log(doubleCount()); */

    /* const a = signal(2);
    const b = signal(3);
    const sum = computed( () => a() + b());
    console.log(sum());
    a.set(10);
    console.log(sum()); */

    /* const a = signal(2);
    const b = signal(3);
    const sum = computed( () => {
      console.log('recalculating');
      return a() + b()
    });
    sum();
    sum();
    sum();
    sum();
    a.set(10)
    sum();
    sum();
    console.log(sum());
    console.log(sum());
    b.set(3);
    console.log(sum());
    console.log(sum());
    console.log(sum()); */
    
  }
  
}



/* //! Signal (imutable) - WritableSignal (mutaveis)
const count = signal(0);
console.log(count());

count.set(5);
console.log(count());

count.set(count() + 1);
console.log(count());

const increment = () => count.update( v => v + 1 );
increment();
console.log(count());
increment();
console.log(count());


console.log('----------------------');


const names = signal<string[]>([]);
console.log(names());

const addNames = (name: string) => names.update( val => [...val, name] );
addNames('Joao');
console.log(names());
addNames('José');
console.log(names()); */
