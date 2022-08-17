import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ForgotPasswordResponse,
  LoginPayload,
  LoginResponse,
  User,
} from '../interfaces/auth';
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
    user.isAdmin = false; // is admin is false by default for now
    return this._api.post('auth/register', user, { observe: 'body' });
  }

  public resetPassword(email: string): Observable<ForgotPasswordResponse> {
    return this._api.post(
      'auth/reset-password',
      { email },
      { observe: 'body' }
    );
  }

  public logout(): void {
    this.tokenStorageService.clearStorage();
  }
}
