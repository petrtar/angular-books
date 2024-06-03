import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { EditBookComponent } from '../../components/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../../components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from '../../store/books.reducer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookListComponent, EditBookComponent, ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({ books: booksReducer }, {}),
  ],
})
export class BooksModule {}
