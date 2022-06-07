import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { LoginPayload } from '../interfaces/loginPayload';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    private tokenStorageService: TokenStorageService
  ) {}

  public login(credentials: LoginPayload): Observable<any> {
    // return this.http.post(`${this.API_URL}/login`, credentials);
    // const loginResponse = { token: 'myToken' };
    // return of(loginResponse);
    return this.apiService
      .postTypeRequest('auth/login', {
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
          console.log(response);
          console.log(user);
          return user;
        })
      );
  }

  register(user: any) {
    return this.apiService.postTypeRequest('auth/register', {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
    });
  }

  public logout(): void {
    // localStorage.removeItem('authToken');
    this.tokenStorageService.clearStorage();
  }

  public setLoginToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  public getToken() {
    localStorage.getItem('authToken');
  }
}
