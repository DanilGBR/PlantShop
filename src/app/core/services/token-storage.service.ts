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

  public setUser(user: any): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public clearStorage(): void {
    sessionStorage.clear();
  }

  public setLoginToken(
    token: string,
    rememberMeChecked: boolean = false
  ): void {
    rememberMeChecked
      ? localStorage.setItem(this.TOKEN_KEY, token)
      : sessionStorage.setItem(this.TOKEN_KEY, token);
  }
}
