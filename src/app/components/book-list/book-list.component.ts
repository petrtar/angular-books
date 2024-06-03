import { Component } from '@angular/core';
import { IBook } from '../../models/books';
import { BookApiService } from '../../services/bookApi.service';
import { Store } from '@ngrx/store';
import { selectBooks } from '../../store/books.selectors';
import { BooksActions } from '../../store/books.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  constructor(private bookApiService: BookApiService, private store: Store) {}

  books$ = this.store.select(selectBooks);
  isShowModal: boolean = false;
  editedBookId: number | null = null;

  ngOnInit() {
    this.bookApiService.getAllBooks().subscribe((data) => {
      this.store.dispatch(BooksActions.retrievedBookList({ books: data }));
    });
  }

  edit(bookId: number) {
    this.editedBookId = bookId;
    this.isShowModal = true;
  }

  closeModal(event: boolean) {
    this.isShowModal = event;
    this.editedBookId = null;
  }

  addNewBook() {
    this.isShowModal = true;
  }
}
