import { ReactNode, lazy } from "react"
import type { Metadata } from 'next'
import './globals.scss'

import { cachedClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import Analytics from "@/components/google-analytics/Analytics"
import Head from "next/head"

const CookieBanner = lazy(() => import("@/components/cookie-banner/CookieBanner"))
const CookieModal = lazy(() => import("@/components/cookie-banner/CookieModal"))

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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Analytics />
        {children}
        <CookieBanner data={data} />
        <CookieModal data={data?.modal} />
      </body>
    </html>
  )
}
