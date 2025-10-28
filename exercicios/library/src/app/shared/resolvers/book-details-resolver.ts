import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/book';

export const bookDetailsResolver: ResolveFn<Book> = (route, state) => {

  const bookService = inject(BookService);
  const id = +(route.paramMap.get('id') ?? 0)

  return bookService.getBookById(id);
};
