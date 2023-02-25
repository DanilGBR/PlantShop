import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ForgotPasswordResponse,
  LoginPayload,
  UserLoginState,
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

  public login(credentials: LoginPayload): Observable<UserLoginState> {
    return this._api.post('auth/login', credentials);
  }

  public register(user: User): Observable<UserLoginState> {
    user.isAdmin = false; // isAdmin is false by default for now
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
