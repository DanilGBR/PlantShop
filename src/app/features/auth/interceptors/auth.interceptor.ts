import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../../core/services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(req));
  }

  private addAuthToken(request: HttpRequest<any>) {
    const token = this.tokenService.getToken();
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
}
