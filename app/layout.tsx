import { ReactNode, lazy } from "react"
import type { Metadata } from 'next'
import './globals.scss'

const Analytics = lazy(() => import("@/components/google-analytics/Analytics"))

const domain = process.env.NEXT_PUBLIC_DOMAIN

export const metadata: Metadata = {
  metadataBase: new URL(`${domain}`),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  category: "website"
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="de" className="bg-black text-white">
      <body className="flex flex-col min-h-screen">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
