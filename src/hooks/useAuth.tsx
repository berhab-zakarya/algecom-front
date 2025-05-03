import { create } from 'zustand'
import { useState } from 'react'

interface AuthState {
  isAuthenticated: boolean
  user: any | null
  hasStore: boolean
  login: (userData: any) => void
  logout: () => void
  setHasStore: (value: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  hasStore: false,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setHasStore: (value) => set({ hasStore: value })
}))

export interface UseAuthReturn {
  isAuthenticated: boolean
  hasStore: boolean
  login: (user: any) => void
  logout: () => void
  setHasStore: (value: boolean) => void
}

export function useAuth(): UseAuthReturn {
  const { isAuthenticated, hasStore, login, logout, setHasStore } = useAuthStore()

  return {
    isAuthenticated,
    hasStore,
    login,
    logout,
    setHasStore
  }
}