import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly http = inject(HttpClient);

  getBooks() {
    return this.http.get<Book[]>('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books')
  }

  getBookById(id: number){
    return this.http.get<Book>(`https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books/${id}`)
  }
}
