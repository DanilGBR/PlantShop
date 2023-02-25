import { createAction, props } from '@ngrx/store';
import { LoginPayload, UserLoginState } from '../../interfaces/auth';

export const LoginAction = createAction(
  '[Auth] Login Action',
  props<LoginPayload>()
);
export const LoginActionSuccess = createAction(
  '[Auth] Login Action Success',
  props<UserLoginState>()
);
export const LoginActionFailure = createAction(
  '[Auth] Login Action Failure',
  props<{ error: any }>()
);

export const LogoutAction = createAction('[Auth] Logout Action');
