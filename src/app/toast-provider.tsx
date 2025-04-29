// app/toast-provider.tsx (renamed from providers.tsx)
"use client"

import { Toaster } from "@/components/ui/toaster"

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

// app/layout.tsx
// Removed the conflicting import for ToastProvider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}