import React from "react"
import "./globals.css"

export const metadata = {
  title: "Noey Ignacio (@noeyislearning)",
  description: "Noey Ignacio's personal website, showcasing his finished and active projects, blog posts, and some creative works.",
}

/** --- Font --- */
import { Inter } from "next/font/google"
const globalFont = Inter({ subsets: ['latin'] })

/** --- Components --- */
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
