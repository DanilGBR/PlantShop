export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginRegisterResponse {
  message: string;
  token: string;
}

export interface StoreAuth {
  auth: UserAuthState;
}
export interface UserAuthState {
  fullName: string | null;
  isLoggedIn: boolean | null;
  isAdmin: boolean | null;
  error?: string | { message: string } | null;
}

export interface TokenUserInfo {
  data: {
    createdAt: string;
    email: string;
    fullName: string;
    isAdmin: true;
    password: string;
    saltSecret: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
  iat: string;
  exp: string;
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
