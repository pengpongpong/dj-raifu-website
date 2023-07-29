import { ReactNode } from "react"
import './globals.scss'
import type { Metadata } from 'next'
import CookieBanner from "@/components/cookie-banner/CookieBanner"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import CookieModal from "@/components/cookie-banner/CookieModal"

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
  const data = await client.fetch(query)

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
