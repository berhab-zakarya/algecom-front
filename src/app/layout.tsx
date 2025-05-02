import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme/theme-provider"
import "@/styles/globals.css"
import { outfitFont } from "@/styles/fonts"

export const metadata: Metadata = {
  title: "Algecom",
  description: "Description of your application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfitFont.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}