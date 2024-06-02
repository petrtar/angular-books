import { Component } from '@angular/core';
import { IBook } from '../../models/books';
import { books } from '../../data/books';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  constructor(private bookService: BookService) {}

  books: IBook[] = [];
  editedBookId: number | null = null;

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  edit(bookId: number) {
    if (this.editedBookId === bookId) this.editedBookId = null;
    else this.editedBookId = bookId;
  }
}
