import { lazy } from "react"
import { Metadata } from "next"
import { draftMode } from "next/headers"

import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { urlForImage } from "@/sanity/lib/image"
import {  homeQuery, navQuery } from "@/sanity/lib/query"

import Navbar from "@/components/navbar/Navbar"
import Home from "@/components/pages/home/Home"

import PreviewProvider from "@/components/sanity-preview/PreviewProvider"
import HomePreview from "@/components/pages/home/HomePreview"
import NavbarPreview from "@/components/navbar/NavbarPreview"

// meta data
export async function generateMetadata(): Promise<Metadata> {
  const title = "DJ Raifu"
  const description = "Musik DJ für Afro Beats, Hip-Hop, R&B und mehr. Buche ihn für dein Event"
  const keywords = "DJ Raifu, Afro-Beats, Music, DJ, Hip-Hop, R&B, Events, Veranstaltung"
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  const query = groq`*[_type =="logo"][0]{image}`
  const data = await cachedClient(query)

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'DJ Raifu' }],
    openGraph: {
      title: title,
      description: description,
      url: `${domain}`,
      siteName: 'DJ Raifu',
      images: [
        {
          url: urlForImage(data?.image).url(),
          width: 300,
          height: 215,
          alt: "DJ Raifu Logo"
        }
      ],
      locale: "de",
      type: 'website'
    },
  }
}

const Footer = lazy(() => import("@/components/footer/Footer"))

const HomePage = async () => {
  // preview mode
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined

  const pageData = await getCachedClient(preview)(homeQuery)
  const navData = await getCachedClient(preview)(navQuery)

  if (preview && preview.token) {
    return (
      <>
        <PreviewProvider token={preview.token}>
          <NavbarPreview navData={navData} />
          <HomePreview pageData={pageData} />
        </PreviewProvider>
      </>
    )
  }

  return (
    <>
      <Navbar navData={navData} />
      <Home data={pageData} />
      <Footer />
    </>

  )
}

export default HomePage
