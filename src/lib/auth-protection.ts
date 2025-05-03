// /lib/auth-protection.ts

import { NextRequest, NextResponse } from 'next/server';

// For client components to check auth before rendering protected content
export function useRequireAuth(redirectUrl = '/login') {
  // Import hooks only at component level to avoid SSR issues
  const { useEffect } = require('react');
  const { useRouter } = require('next/navigation');
  const useAuth = require('@/hooks/useAuth').default;
  
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push(redirectUrl);
    }
  }, [router, redirectUrl]);
  
  return { isAuthenticated: isAuthenticated() };
}

// For API routes
export async function checkAuthToken(request: NextRequest) {
  // Get the token from the Authorization header
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    // Here you would verify the token with your auth service
    // This is a placeholder for your token verification logic
    const isValidToken = await verifyToken(token);
    
    if (!isValidToken) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // If we get here, the token is valid
    return null; // No error
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Authentication error' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Mock function - replace with your actual token verification
async function verifyToken(token: string): Promise<boolean> {
  // In a real app, you would verify the token against your auth service
  // This could involve JWT verification, session checking, etc.
  
  // For example with a JWT:
  // return jwt.verify(token, process.env.JWT_SECRET);
  
  // This is just a placeholder
  return token.length > 0;
}

// Middleware-style auth protection for app router
export function withAuth(handler: (req: NextRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const authError = await checkAuthToken(request);
    
    if (authError) {
      return authError;
    }
    
    // Token is valid, proceed with the handler
    return handler(request);
  };
}