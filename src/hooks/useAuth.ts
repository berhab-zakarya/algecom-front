import { useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import {  UserAuth, LoginCredentials, AuthResponse } from '@/types';
import {authAPI} from "@/services/api"

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

interface UseAuthReturn {
  user: UserAuth | null;
  error:string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  checkTokenExpiration: () => boolean;
  refreshToken: () => Promise<boolean>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<UserAuth | null>(authAPI.getCurrentUser());
  const [error,setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('access_token'));

  // Check if token is expired
  const checkTokenExpiration = useCallback((): boolean => {
    const token = localStorage.getItem('access_token');
    if (!token) return true; // No token means expired

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      // Check if token is expired (current time > expiration time)
      return decoded.exp * 1000 < Date.now();
    } catch (err) {
        setError('Failed to decode token: '+err);
       
      console.error('Failed to decode token:', err);
      return true; // If we can't decode the token, consider it expired
    }
  }, []);

  // Refresh token function
  const refreshToken = useCallback(async (): Promise<boolean> => {
    const token = localStorage.getItem('refresh_token');
    if (!token) return false;

    try {
      // In a real implementation, you would call your refresh token endpoint
      // For now we'll simulate this by checking if the token exists
      // This should be replaced with an actual API call to refresh the token
      
      // Example of what a refresh token call might look like:
      // const response = await api.post<AuthResponse>('/refresh-token/', { refresh: token });
      // const { access, refresh, user } = response.data;
      // localStorage.setItem('access_token', access);
      // localStorage.setItem('refresh_token', refresh);
      // localStorage.setItem('user', JSON.stringify(user));
      // setUser(user);
      // setIsAuthenticated(true);
      
      return !checkTokenExpiration();
    } catch (err) {
        setError(' '+ err);
      console.error('Failed to refresh token:', err);
      await logout();
      return false;
    }
  }, [checkTokenExpiration]);

  // Login function
  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    try {
      const response: AuthResponse = await authAPI.login(credentials);
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (err) {
         setError(' '+ err);
      console.error('Login failed:', err);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await authAPI.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
        setError(' '+ err);
      console.error('Logout failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      try {
        // Check if there's a user and if the token is valid
        const currentUser = authAPI.getCurrentUser();
        
        if (currentUser && localStorage.getItem('access_token')) {
          // Check if token is expired
          if (checkTokenExpiration()) {
            // Try to refresh the token
            const refreshed = await refreshToken();
            if (!refreshed) {
              await logout();
            }
          }
          setUser(currentUser);
          setIsAuthenticated(!!localStorage.getItem('access_token'));
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        setError(' '+ err);
        console.error('Auth initialization failed:', err);
        await logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [checkTokenExpiration, refreshToken]);

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    error,
    logout,
    checkTokenExpiration,
    refreshToken
  };
};