import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';

import { IBook } from '../../models/books';
import { getBookById } from '../../store/books.selectors';
import { BookApiService } from '../../services/bookApi.service';
import { BooksActions } from '../../store/books.actions';
import { authors } from '../../data/authors';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  bookForm: FormGroup;
  authors = authors;

  @Input() bookId!: number | null;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor(private store: Store, private bookApiService: BookApiService) {
    this.bookForm = new FormGroup({
      id: new FormControl<number | null>(null),
      title: new FormControl('', [Validators.required]),
      publication_year: new FormControl<string | number>('', [
        Validators.required,
      ]),
      genre: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      cover_image: new FormControl('', [Validators.required]),
      author: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.bookId) {
      this.store.select(getBookById({ id: this.bookId })).subscribe((book) => {
        if (book)
          this.bookForm.patchValue({
            id: book.id,
            title: book.title,
            publication_year: book.publication_year,
            genre: book.genre,
            description: book.description,
            cover_image: book.cover_image,
            author:
              this.authors.find(
                (author) => author.authorId === book.authorId
              ) || this.authors[0],
          });
      });
    }
  }

  onSubmit() {
    const newBook: IBook = {
      id: this.bookForm.value.id,
      title: this.bookForm.value.title,
      authorId: this.bookForm.value.author.authorId,
      firstName: this.bookForm.value.author.firstName,
      lastName: this.bookForm.value.author.lastName,
      publication_year: this.bookForm.value.publication_year,
      genre: this.bookForm.value.genre,
      description: this.bookForm.value.description,
      cover_image: this.bookForm.value.cover_image,
    };
    if (newBook.id) {
      this.bookApiService.updateBook(newBook).subscribe((data) => {
        this.store.dispatch(BooksActions.addBook({ newBook: data }));
        this.closeModalEvent.emit(false);
      });
    } else {
      this.bookApiService.addBook(newBook).subscribe((data) => {
        this.store.dispatch(BooksActions.addBook({ newBook: data }));
        this.closeModalEvent.emit(false);
      });
    }
  }
}
