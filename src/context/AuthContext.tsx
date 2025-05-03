"use client"
// context/AuthContext.tsx
import React, { createContext, useReducer, useEffect } from 'react';
import { authAPI, User, LoginCredentials, SignupData } from '../services/api';

// Define the state type
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Define action types
type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: User }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'AUTH_RESET_ERROR' };

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

// Reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case 'AUTH_RESET_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Create context type
interface AuthContextType {
  state: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  resetError: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for saved user on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if there's a token in localStorage
        const accessToken = localStorage.getItem('access_token');
        
        if (!accessToken) {
          dispatch({ type: 'AUTH_LOGOUT' });
          return;
        }
        
        // Get user from localStorage or fetch from API
        const user = authAPI.getCurrentUser();
        
        if (user) {
          dispatch({ type: 'AUTH_SUCCESS', payload: user });
        } else {
          // If we have a token but no user, something is wrong
          dispatch({ type: 'AUTH_LOGOUT' });
          // Clear localStorage
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
        }
      } catch (error) {
        dispatch({ type: 'AUTH_FAILURE', payload: 'Authentication failed. Please log in again.' });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'AUTH_START' });
    
    try {
      const response = await authAPI.login(credentials);
      
      // Store tokens and user data
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      dispatch({ type: 'AUTH_SUCCESS', payload: response.user });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    dispatch({ type: 'AUTH_START' });
    
    try {
      await authAPI.logout();
      
      // Remove tokens and user data
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      dispatch({ type: 'AUTH_LOGOUT' });
    } catch (error) {
      console.error('Logout error:', error);
      dispatch({ type: 'AUTH_FAILURE', payload: 'Logout failed. Please try again.' });
    }
  };

  // Signup function
  const signup = async (credentials: SignupData) => {
    dispatch({ type: 'AUTH_START' });

    try {
      const response = await authAPI.signup(credentials);

      // Store tokens and user data
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('user', JSON.stringify(response.user));

      dispatch({ type: 'AUTH_SUCCESS', payload: response.user });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // Reset error state
  const resetError = () => {
    dispatch({ type: 'AUTH_RESET_ERROR' });
  };

  // Create context value
  const contextValue: AuthContextType = {
    state,
    login,
    signup,
    logout,
    resetError,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};