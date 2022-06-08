import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  TOKEN_KEY = 'authToken';
  USER_KEY = 'authUser';

  constructor() {}

  public getToken(): any {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  setLoginToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getUser(): any {
    // return JSON.parse(sessionStorage.getItem(this.USER_KEY));
  }

  setUser(user: any): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  clearStorage(): void {
    sessionStorage.clear();
  }
}
