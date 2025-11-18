import { Component, inject } from '@angular/core';
import { BookFilter } from '../../types/bookFilter';
import { BookService } from '../../services/book.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-book-filters',
  imports: [FormsModule],
  template: `
    <section>
      <button (click)="setFilter('all')">show all</button>
      <button (click)="setFilter('read')">show read</button>
      <button (click)="setFilter('not-read')">show not-read</button>
    </section>
    <section>
      <label for="searchTerm">Search By tile/author</label>
      <input type="text" id="searchTerm" 
        placeholder="search by title or author"
        [ngModel]="searchTerm()"
        (ngModelChange)="setSearchTerm($event)"
      />
    </section>
  `,
  styles: ``,
})
export class BookFilters {
  private readonly bookService = inject(BookService);

  readonly searchTerm = this.bookService.searchTerm;

  setFilter(filter: BookFilter){
    this.bookService.setFilter(filter);
  }

  setSearchTerm(term: string){
    this.bookService.setSearchTerm(term);
  }

}
