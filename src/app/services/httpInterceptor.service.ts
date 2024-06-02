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

/** Pass untouched request through to the next request handler. */
@Injectable({
  providedIn: 'root',
})
export class httpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method } = req;
    if (url.endsWith('/books') && method === 'GET') {
      return of(new HttpResponse({ status: 200, body: books }));
    }
    return next.handle(req);
  }
}
