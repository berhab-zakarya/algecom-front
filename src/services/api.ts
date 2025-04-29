// services/api.ts
import qs from 'qs'; 

import axios from 'axios';

const API_BASE_URL = 'https://algecom.studxptm.com/api/v1';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  role: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
  user: User;
}

// Add request interceptor to include auth token in requests
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh the token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (!refreshToken) {
          // No refresh token, logout user
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          return Promise.reject(error);
        }

        // Implement refresh token endpoint when available
        // For now we'll just logout the user
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        
        return Promise.reject(error);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const data = qs.stringify(credentials);

    const response = await api.post<AuthResponse>('/login/', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    return response.data;
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },
};

export default api;