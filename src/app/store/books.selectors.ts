import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from '../models/books';

export const selectBooks = createFeatureSelector<ReadonlyArray<IBook>>('books');

export const getBookById = (props: { id: number }) =>
  createSelector(selectBooks, (state) =>
    state.find((book) => book.id === props.id)
  );
