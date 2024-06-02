import { createActionGroup, props } from '@ngrx/store';
import { IBook } from '../models/books';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ newBook: IBook }>(),
    'Retrieved Book List': props<{ books: ReadonlyArray<IBook> }>(),
  },
});
