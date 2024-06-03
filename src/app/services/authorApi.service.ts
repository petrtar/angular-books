import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorApiService {
  constructor(private http: HttpClient) {}

  getAuthorById(authorId: string) {
    return this.http.get<IAuthor>(
      'https://localhost:3000/api/v1/author/' + authorId + '?_expand=author'
    );
  }
}
