import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme/theme-provider"
import "@/styles/globals.css"
import { algecomFont } from "@/styles/fonts"

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Description of your application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${algecomFont.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}