import { createReducer, on } from '@ngrx/store';
import { UserLoginState } from '../../interfaces/auth';
import {
  LoginAction,
  LoginActionFailure,
  LoginActionSuccess,
  LogoutAction,
} from '../actions/auth.actions';

export const initialState: UserLoginState = {
  message: null,
  fullName: null,
  token: null,
  isLoggedIn: null,
  isAdmin: null,
};

export const authReducer = createReducer(
  initialState,
  on(LoginAction, (state) => ({ ...state, error: null })),
  on(LoginActionSuccess, (state, payload) => ({
    ...state,
    isLoggedIn: true,
    error: null,
    message: payload.message,
    fullName: payload.fullName,
  })),
  on(LoginActionFailure, (state, { error }) => ({
    ...state,
    isLoggedIn: false,
    fullName: null,
    token: null,
    isAdmin: null,
    error,
  })),
  on(LogoutAction, (state) => initialState)
);
