import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";
import { BookFilters } from "./book-filters";

@Component({
  selector: 'app-book-list',
  imports: [NgFor, RouterLink, BookFilters],
  template: `
    <h1>LIvros de JS</h1>
    <app-book-filters />
    <hr>
    <section class="grid">
      <article *ngFor="let book of books()">
        <h1><a [routerLink]="['/books/details', book.id]">{{ book.title }}</a></h1>
        <h2>{{ book.author }}</h2>
        <img src="livros/{{ book.imageUrl }}" />
        <p>Already Read: {{ book.alreadyRead ? '✅' : '❌' }}</p>
        <button (click)="deleteBook(book.id)">Delete Book</button>
      </article>
    </section>
  `,
  styles: ``,
})
export class BookList {
  private readonly bookService = inject(BookService);

  //readonly books = this.bookService.books;
  readonly books = this.bookService.filteredBooks;


  deleteBook(id: number){
    this.bookService.deleteBook(id)
  }

  //books$ = this.bookService.getBooks();
}
