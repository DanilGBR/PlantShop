import { createAction, props } from '@ngrx/store';
import { LoginCredentials, UserAuthState } from '../../interfaces/auth';

export const LoginAction = createAction(
  '[Auth] Login Action',
  props<LoginCredentials>()
);
export const LoginActionSuccess = createAction(
  '[Auth] Login Action Success',
  props<UserAuthState>()
);
export const LoginActionFailure = createAction(
  '[Auth] Login Action Failure',
  props<{ error: any }>()
);

export const LogoutAction = createAction('[Auth] Logout Action');
