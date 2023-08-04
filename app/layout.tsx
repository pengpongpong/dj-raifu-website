import { ReactNode } from "react"
import type { Metadata } from 'next'
import './globals.scss'

import CookieBanner from "@/components/cookie-banner/CookieBanner"
import CookieModal from "@/components/cookie-banner/CookieModal"

import { cachedClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"

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
        {children}
        <CookieBanner data={data} />
        <CookieModal data={data?.modal} />
      </body>
    </html>
  )
}
