export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
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
