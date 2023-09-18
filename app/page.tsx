import { lazy } from "react"
import { Metadata } from "next"
import { draftMode } from "next/headers"

import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityImage, urlForImage } from "@/sanity/lib/image"
import { cookieQuery, homeQuery, navQuery } from "@/sanity/lib/query"

import Navbar, { NavbarProps } from "@/components/navbar/Navbar"
import Home, { HomeData } from "@/components/pages/home/Home"
import { CookieBannerProps } from "@/components/cookie-banner/CookieBanner"

// meta data
export async function generateMetadata(): Promise<Metadata> {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  const query = groq`*[_type =="logo"][0]{image}`
  const logo: { image: SanityImage } = await cachedClient(query)
  const data: HomeData = await cachedClient(homeQuery)

  return {
    title: data?.seo.title,
    description: data?.seo.description,
    keywords: data?.seo.keywords,
    authors: [{ name: 'DJ Raifu' }],
    metadataBase: new URL(domain as string),
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title: data?.seo.title,
      description: data?.seo.description,
      url: `${domain}`,
      siteName: 'DJ Raifu',
      images: [
        {
          url: urlForImage(logo?.image).url(),
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

const PreviewProvider = lazy(() => import("@/components/sanity-preview/PreviewProvider"))
const NavbarPreview = lazy(() => import("@/components/navbar/NavbarPreview"))
const HomePreview = lazy(() => import("@/components/pages/home/HomePreview"))
const Footer = lazy(() => import("@/components/footer/Footer"))

const CookieBanner = lazy(() => import("@/components/cookie-banner/CookieBanner"))
const CookieModal = lazy(() => import("@/components/cookie-banner/CookieModal"))

const HomePage = async () => {
  // preview mode
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined

  const pageData: HomeData = await getCachedClient(preview)(homeQuery)
  const navData: NavbarProps = await getCachedClient(preview)(navQuery)
  const cookieData: CookieBannerProps = await cachedClient(cookieQuery)

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
      <Navbar navData={navData} main />
      <Home data={pageData} />
      <Footer />
      <CookieBanner data={cookieData} main />
      <CookieModal data={cookieData?.modal} />
    </>

  )
}

export default HomePage
