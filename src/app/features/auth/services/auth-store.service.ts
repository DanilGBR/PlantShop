import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginCredentials, UserLoginState } from '../interfaces/auth';
import { LoginAction, LogoutAction } from '../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  constructor(private store: Store) {}

  public dispatchLogin(payload: LoginCredentials): void {
    this.store.dispatch(LoginAction(payload));
  }

  public fetchLoginState(): Observable<UserLoginState> {
    // TODO: state should have a type assigned here
    return this.store.pipe(
      select((state: any) => {
        const errorMessage = state.auth?.error?.message;
        return errorMessage;
      })
    );
  }

  public logoutUser(): void {
    this.store.dispatch(LogoutAction());
  }

  public isUserAdmin(): Observable<boolean> {
    return this.store.pipe(
      // TODO: state should have a type assigned here
      select((state: any) => state.auth?.isAdmin)
    );
  }
}
