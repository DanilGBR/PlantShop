import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from '../interfaces/loginPayload';
import { LoginResponse } from '../interfaces/loginResponse';
import { User } from '../interfaces/user';
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

  public login(credentials: LoginPayload): Observable<LoginResponse> {
    return this._api.post('auth/login', {
      email: credentials.email,
      password: credentials.password,
    });
  }

  public register(user: User): Observable<LoginResponse> {
    return this._api.post(
      'auth/register',
      {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        isAdmin: false, // is admin is false by default for now
      },
      { observe: 'body' }
    );
  }

  public logout(): void {
    this.tokenStorageService.clearStorage();
  }

  public setLoginToken(
    token: string,
    rememberMeChecked: boolean = false
  ): void {
    if (rememberMeChecked === true) {
      localStorage.setItem('authToken', token);
    } else {
      sessionStorage.setItem('authToken', token);
    }
  }
  public getToken(): void {
    localStorage.getItem('authToken');
  }
}
