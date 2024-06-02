import { createReducer, on } from '@ngrx/store';

import { BooksActions } from './books.actions';
import { IBook } from '../models/books';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.retrievedBookList, (_state, { books }) => books),
  on(BooksActions.addBook, (state, { newBook }) => {
    if (state.findIndex((book) => book.id === newBook.id) > -1) return state;

    return [...state, newBook];
  })
);
