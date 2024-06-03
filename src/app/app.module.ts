import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from './services/httpInterceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { ModalComponent } from './components/modal/modal.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, EditBookComponent, ModalComponent, AuthorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ books: booksReducer }, {}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
