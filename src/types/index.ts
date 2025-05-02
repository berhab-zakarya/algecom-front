export interface LoginCredentials {
  email: string;
  password: string;
}
export interface UserAuth {
  id: number;
  email: string;
  role: string;
  name: string;
  store: string;
  avatar?: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
  user: UserAuth;
}
