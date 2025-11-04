import { Component } from '@angular/core';
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

    /* console.log("---------- of() ---------")

    of(1,2,'joao', 'maria', true).subscribe({
      next: val => console.log(val),
      error: err => console.log(err),
      complete: ()=> console.log("Fim da Stream de Dados...."),
    });

    console.log("---------- from(array) ---------")
    let nomes = ['Joao', 'Manuel', 'Maria', 'Ana'];

    let nomes$ = from(nomes);

    nomes$.subscribe({
      next: val => console.log(val),
      error: err => console.log(err),
      complete: ()=> console.log("Fim da Stream de Dados...."),
    });

    console.log("---------- interval() ---------")
    const numbers$ = interval(1000);

    //numbers$.subscribe( n => console.log('Numero: ', n ));
    numbers$.pipe(
      filter( n => n % 2 === 0),
      take(10)
    ).subscribe( n => console.log('Numero: ', n ));


    console.log("---------- operators ---------")

    console.log("---------- operators ---------")
    
    let cervejas = [
      {nome:'Sagres', pais:'Portugal', preco: 1.90},
      {nome:'Stella', pais:'Belgica', preco: 3.90},
      {nome:'Trappe', pais:'Belgica', preco: 4.90},
      {nome:'Guiness', pais:'Irlanda', preco: 2.90},
      {nome:'Brahma', pais:'Brasil', preco: 1.50},
    ];

    let cervejas$ = from(cervejas);

    cervejas$.pipe(
      filter(cerveja => cerveja.preco > 2.5),
      map( cerveja => `Cerveja: ${cerveja.nome} - €${cerveja.preco}`)
    ).subscribe({
      next: cerveja => console.log(cerveja),
      error: err => console.log(err),
      complete: ()=> console.log('Acabaram os Chopinhos, muda para o Vinho...')
    });

    console.log("-------------------") */

    /*  console.log('----------------------------------');
    
    // COLD 
    let random1 = new Observable( observer => observer.next(Math.random()));

    random1.subscribe( num => console.log("OBS1 : ", num));
    random1.subscribe( num => console.log("OBS2 : ", num));
    random1.subscribe( num => console.log("OBS3 : ", num));


    console.log('----------------------------------');


    //HOT
    let random2 = new BehaviorSubject(0);

    random2.next(Math.random());

    random2.subscribe(num => console.log('ObserverSubject1 :', num));
    random2.subscribe(num => console.log('ObserverSubject2 :', num)); 
    random2.subscribe(num => console.log('ObserverSubject3 :', num)); 


    console.log('----------------------------------'); 
  

   let subject = new Subject();

    subject.next('a');
    subject.next('b');
    subject.subscribe( val => console.log("subscricao recebeu: ", val));
    subject.next('c');
    subject.next('d'); 



    console.log('----------------------------------');

    let bSubject = new BehaviorSubject('a');

    bSubject.next('a');
    bSubject.next('b');
    bSubject.subscribe( val => console.log("subscricao recebeu: ", val));
    bSubject.next('c');
    bSubject.next('d');


    console.log('----------------------------------'); */


  }
  
}
