import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';

import { IBook } from '../../models/books';
import { getBookById } from '../../store/books.selectors';
import { BookService } from '../../services/book.service';
import { BooksActions } from '../../store/books.actions';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private bookService: BookService
  ) {}

  @Input() bookId!: number | null;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  ngOnInit() {
    if (this.bookId) {
      this.store.select(getBookById({ id: this.bookId })).subscribe((book) => {
        if (book) this.bookForm.patchValue(book);
      });
    }
  }

  bookForm = this.fb.group<IBook>({
    id: 0,
    title: '',
    author: '',
    publication_year: '',
    genre: '',
    description: '',
    cover_image: '',
  });

  onSubmit() {
    if (this.bookForm.value.id) {
      this.bookService
        .updateBook(this.bookForm.value as IBook)
        .subscribe((data) => {
          this.store.dispatch(BooksActions.addBook({ newBook: data }));
          this.closeModalEvent.emit(false);
        });
    }
  }
}
