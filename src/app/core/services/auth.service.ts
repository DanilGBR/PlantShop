import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginPayload } from '../interfaces/loginPayload';
import { LoginResponse } from '../interfaces/loginResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'test';
  constructor(private http: HttpClient) {}

  public login(credentials: LoginPayload): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
    // const loginResponse = { token: 'myToken' };
    // return of(loginResponse);
  }

  public logout(): void {
    localStorage.removeItem('authToken');
  }

  public setLoginToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  public getToken() {
    localStorage.getItem('authToken');
  }
}
