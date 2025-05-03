'use client'


import AppSidebar from '@/components/dashboard/AppSidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Outfit } from 'next/font/google';
import { ReactNode } from 'react';
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'


export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {

  const { login } = useAuth()
  useEffect(() => {
    // Check for existing session/token
    const checkAuth = async () => {
      try {
        // Add your auth check logic here
        const session = await checkSession()
        if (session) {
          login(session.user)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      }
    }

    checkAuth()
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}



async function checkSession() {
  try {
    // Make a request to your authentication endpoint
    const response = await fetch('/api/auth/session', {
      credentials: 'include' // Important for cookies
    });
    
    if (!response.ok) {
      throw new Error('Session check failed');
    }
    
    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Session check error:', error);
    return null;
  }
}