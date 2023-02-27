export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginRegisterResponse {
  message: string;
  token: string;
}

export interface UserLoginState {
  fullName: string | null;
  isLoggedIn: boolean | null;
  isAdmin: boolean | null;
}

export interface User {
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface ForgotPasswordResponse {
  message: string;
}
