import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ForgotPasswordResponse,
  LoginCredentials,
  LoginRegisterResponse,
  User,
} from '../interfaces/auth';
import { ApiService } from '../../../core/services/api.service';
import { TokenStorageService } from '../../../core/services/token-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _api: ApiService,
    private tokenStorageService: TokenStorageService
  ) {}

  public login(
    credentials: LoginCredentials
  ): Observable<LoginRegisterResponse> {
    const { email, password } = credentials;
    return this._api.post('auth/login', { email, password });
  }

  public register(user: User): Observable<LoginRegisterResponse> {
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
