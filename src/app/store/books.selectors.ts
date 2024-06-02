import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IBook } from '../models/books';

export const selectBooks = createFeatureSelector<ReadonlyArray<IBook>>('books');
