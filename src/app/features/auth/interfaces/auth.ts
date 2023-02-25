export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserLoginState {
  message: string | null;
  fullName: string | null;
  token: string | null;
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
