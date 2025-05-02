import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme/theme-provider"
import "@/styles/globals.css"
import { Poppins } from 'next/font/google'
import { Sidebar } from "@/components/common/Sidebar"

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
       <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}