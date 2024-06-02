import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { IBook } from '../../models/books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  constructor(private fb: FormBuilder) {}

  @Input() book!: IBook | undefined;

  ngOnInit() {
    if (this.book) {
      this.bookForm.patchValue({
        id: this.book.id,
        title: this.book.title,
        author: this.book.author,
        publication_year: this.book.publication_year,
        genre: this.book.genre,
        description: this.book.description,
        cover_image: this.book.cover_image,
      });
    }
  }

  bookForm = this.fb.group<IBook>({
    id: 0,
    title: '',
    author: '',
    publication_year: '',
    genre: '',
    description: '',
    cover_image: '',
  });
}