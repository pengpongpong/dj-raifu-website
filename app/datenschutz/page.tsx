import React, { lazy } from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import PrivacyPolicy, { PrivacyPolicyProps } from "@/components/pages/privacy-policy/PrivacyPolicy"

import { getCachedClient } from "@/sanity/lib/client"
import { privacyPolicyQuery } from "@/sanity/lib/query"


export async function generateMetadata(): Promise<Metadata> {
  const title = "DJ Raifu | Datenschutz"
  const description = "Information zu Datenschutz"
  const keywords = "Datenschutz, Cookies"
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  
  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'DJ Raifu' }],
    openGraph: {
      title: title,
      description: description,
      url: `${domain}/datenschutz`,
      siteName: 'DJ Raifu | Datenschutz',
      images: [],
      locale: "de",
      type: 'website',
    },
  }
}


const PreviewProvider = lazy(() => import("@/components/sanity-preview/PreviewProvider"))
const PrivacyPolicyPreview = lazy(() => import( "@/components/pages/privacy-policy/PrivacyPolicyPreview"))

const PrivacyPolicyPage = async () => {
  // preview mode
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined

  const pageData: PrivacyPolicyProps = await getCachedClient(preview)(privacyPolicyQuery)

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PrivacyPolicyPreview pageData={pageData} />
      </PreviewProvider>
    )
  }

  return (<PrivacyPolicy pageData={pageData} />)
}

export default PrivacyPolicyPage