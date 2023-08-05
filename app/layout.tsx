import { ReactNode, lazy } from "react"
import type { Metadata } from 'next'
import './globals.scss'

import { cachedClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"


const CookieBanner = lazy(() => import("@/components/cookie-banner/CookieBanner"))
const CookieModal = lazy(() => import("@/components/cookie-banner/CookieModal"))
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

  const query = groq`*[_type == "cookie"][0]{iconText, text, acceptButton, modalButton, modal}`
  const data = await cachedClient(query)

  return (
    <html lang="de" className="bg-black text-white">
      <body className="flex flex-col min-h-screen">
        <Analytics />
        {children}
        <CookieBanner data={data} />
        <CookieModal data={data?.modal} />
      </body>
    </html>
  )
}
