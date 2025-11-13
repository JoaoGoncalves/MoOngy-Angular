import { Component, signal } from '@angular/core';
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

  }
  
}

/* 

//! Signal (imutable) - WritableSignal (mutaveis)
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
console.log(names());
 */