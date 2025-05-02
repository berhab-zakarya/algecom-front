import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme/theme-provider"
import "@/styles/globals.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  })
  
  export const metadata: Metadata = {
  title: "ALgecom | Dashboard",
  description: "Description of your application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${poppins.className}`}>
        {children}
    </div>
  )
}