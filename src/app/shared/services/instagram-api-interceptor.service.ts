import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem('token');
    let newReq = req;
    if (token) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return next.handle(newReq);
  }
}
