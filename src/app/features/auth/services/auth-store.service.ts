import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginCredentials, UserLoginState } from '../interfaces/auth';
import { LoginAction, LogoutAction } from '../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  constructor(private store: Store<UserLoginState>) {}

  public fetchUserLoginState(payload: LoginCredentials) {
    this.store.dispatch(LoginAction(payload));
  }

  public logoutUser() {
    this.store.dispatch(LogoutAction());
  }
}
