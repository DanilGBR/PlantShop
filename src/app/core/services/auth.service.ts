import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { LoginPayload } from '../interfaces/loginPayload';
import { ApiService } from './api.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _api: ApiService,
    private tokenStorageService: TokenStorageService
  ) {}

  public login(credentials: LoginPayload): Observable<any> {
    return this._api
      .post('auth/login', {
        email: credentials.email,
        password: credentials.password,
      })
      .pipe(
        map((response: any) => {
          let user = {
            email: credentials.email,
            token: response.token,
          };
          this.tokenStorageService.setLoginToken(response.token);
          this.tokenStorageService.setUser(response);
        })
      );
  }

  register(user: any) {
    return this._api.post('auth/register', {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
    });
  }

  public logout(): void {
    this.tokenStorageService.clearStorage();
  }

  public setLoginToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  public getToken() {
    localStorage.getItem('authToken');
  }
}
