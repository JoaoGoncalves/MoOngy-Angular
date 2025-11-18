import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Book } from '../types/book';
import { BookFilter } from '../types/bookFilter';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly http = inject(HttpClient);

  // state 
  readonly books = signal<Book[]>([]);

  // signal para guardar ultimo filtro
  readonly bookFilter = signal<BookFilter>('all');

  // signal termo de pesquisa
  readonly searchTerm = signal('');


  // derived state , por filtros
  readonly filteredBooks = computed(()=> {
    const currentFilter = this.bookFilter();
    const allBooks = this.books();
    const term = this.searchTerm().toLowerCase();

    let filtered = allBooks;


    switch (currentFilter) {
      case 'read':
        filtered = allBooks.filter( b => b.alreadyRead)
        break;
      case 'not-read':
        filtered = allBooks.filter( b => !b.alreadyRead)
        break;
      default:
        filtered = allBooks;
        break;
    }

    if (!term) return filtered;

    return filtered.filter(
      b => 
          b.title.toLocaleLowerCase().includes(term) ||
          b.author.toLocaleLowerCase().includes(term)
    )

  })

  constructor(){
    effect(()=> {
      this.getBooks();
    })
  }

  /* getBooks() {
    return this.http.get<Book[]>('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books')
    .subscribe( books => this.books.set(books))
  } */
  getBooks() {
    return this.http.get<Book[]>('http://localhost:3000/books')
    .subscribe( books => this.books.set(books))
  }

  getBookById(id: number){
    return this.http.get<Book>(`http://localhost:3000/books/${id}`)
  }

  deleteBook(bookId: number){
    this.http.delete(`http://localhost:3000/books/books/${bookId}`)
      .subscribe( () => {
        this.books.update(books => books.filter(b => b.id !== bookId))
      })
  }

  setFilter(filter: BookFilter){
    this.bookFilter.set(filter)
  }

  setSearchTerm(term: string){
    this.searchTerm.set(term)
  }


}
