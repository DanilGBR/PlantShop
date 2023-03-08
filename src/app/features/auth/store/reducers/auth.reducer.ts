import { createReducer, on } from '@ngrx/store';
import { UserLoginState } from '../../interfaces/auth';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from '../actions/auth.actions';

export const initialState: UserLoginState = {
  fullName: null,
  isLoggedIn: null,
  isAdmin: null,
};

export const authReducer = createReducer(
  initialState,
  on(LoginAction, (state) => ({ ...state, error: null })),
  on(LoginActionSuccess, (state, { fullName, isAdmin }) => ({
    ...state,
    isLoggedIn: true,
    fullName: fullName,
    isAdmin: isAdmin,
    error: null,
  })),
  on(LoginActionFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    fullName: null,
    isAdmin: null,
    error,
  })),
  on(LogoutAction, () => initialState)
);
