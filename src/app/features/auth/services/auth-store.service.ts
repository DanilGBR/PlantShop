import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginCredentials, UserLoginState } from '../interfaces/auth';
import { LoginAction, LogoutAction } from '../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  constructor(private store: Store<UserLoginState>) {}

  public fetchUserLoginState(payload: LoginCredentials): void {
    this.store.dispatch(LoginAction(payload));
  }

  public logoutUser(): void {
    this.store.dispatch(LogoutAction());
  }

  public isUserAdmin(): Observable<any> {
    return this.store.select((state: UserLoginState) => {
      console.log('Get user info', state);
      return state.isAdmin;
    });
  }
}
