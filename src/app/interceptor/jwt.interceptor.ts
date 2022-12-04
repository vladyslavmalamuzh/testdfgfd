import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.cookie.get('auth'))
    });

    return next.handle(authReq);
  }
}
