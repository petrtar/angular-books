import { createReducer, on } from '@ngrx/store';

import { BooksActions } from './books.actions';
import { IBook } from '../models/books';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.retrievedBookList, (_state, { books }) => books),
  on(BooksActions.addBook, (state, { newBook }) => {
    const books = [...state];
    const index = state.findIndex((book) => book.id === newBook.id);

    if (index >= 0) {
      books[index] = newBook;
    } else {
      books.push(newBook);
    }

    return [...books];
  })
);
