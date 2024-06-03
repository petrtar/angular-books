import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../models/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<IBook[]>('https://localhost:3000/api/v1/books');
  }

  updateBook(book: IBook) {
    return this.http.patch<IBook>(
      `https://localhost:3000/api/v1/book/${book.id}`,
      book
    );
  }

  addBook(book: IBook) {
    return this.http.post<IBook>('https://localhost:3000/api/v1/book', book);
  }
}
