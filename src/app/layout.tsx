"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight:["100","200","300","400","500","600","700","800","900"],
 
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
          
       
      </body>
    </html>
  );
}
