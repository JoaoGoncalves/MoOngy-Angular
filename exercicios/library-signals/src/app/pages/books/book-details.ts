import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-details',
  imports: [],
  template: `
    <article>
      <h1>{{book.title}}</h1>
      <h2>{{book.author}}</h2>
      <img src="livros/{{book.imageUrlGr}}" alt="{{book.title}}">
      <p>{{book.description}}</p>
    </article>
  `,
  styles: ``,
})
export class BookDetails {
  book = inject(ActivatedRoute).snapshot.data['book'] as Book;

}
