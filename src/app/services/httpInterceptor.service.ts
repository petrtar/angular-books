import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { books } from '../data/books';
import { authors } from '../data/authors';

/** Pass untouched request through to the next request handler. */
@Injectable({
  providedIn: 'root',
})
export class httpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = req;
    if (url.endsWith('/books') && method === 'GET') {
      return of(new HttpResponse({ status: 200, body: books }));
    }
    if (method === 'PATCH') {
      return of(new HttpResponse({ status: 200, body }));
    }
    if (method === 'POST') {
      const id = Math.trunc(Math.random() * 1000);
      const newBook = { ...body, id };
      return of(new HttpResponse({ status: 200, body: newBook }));
    }
    if (url.includes('/author') && method === 'GET') {
      const newUrl = new URL(url);
      const id = newUrl.pathname.split('/').at(-1);
      const author = authors.find((author) => author.authorId === id);
      return of(new HttpResponse({ status: 200, body: author }));
    }
    return next.handle(req);
  }
}
