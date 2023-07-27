import { ReactNode } from "react"
import './globals.scss'
import type { Metadata } from 'next'
import CookieBanner from "@/components/cookie-banner/CookieBanner"

export const metadata: Metadata = {
  title: 'DJ Raifu',
  description: 'DJ Raifu',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="de" className="bg-black text-white">
      <body className="flex flex-col min-h-screen">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
