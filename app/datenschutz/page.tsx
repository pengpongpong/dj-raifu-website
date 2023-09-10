import React, { lazy } from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import PrivacyPolicy, { PrivacyPolicyProps } from "@/components/pages/privacy-policy/PrivacyPolicy"

import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { privacyPolicyQuery } from "@/sanity/lib/query"


export async function generateMetadata(): Promise<Metadata> {
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const data: PrivacyPolicyProps = await cachedClient(privacyPolicyQuery)

  return {
    title: data?.seo.title,
    description: data?.seo.description,
    keywords: data?.seo.keywords,
    authors: [{ name: 'DJ Raifu' }],
    openGraph: {
      title: data?.seo.title,
      description: data?.seo.description,
      url: `${domain}/datenschutz`,
      siteName: data?.seo.title,
      locale: "de",
      type: 'website',
    },
  }
}


const PreviewProvider = lazy(() => import("@/components/sanity-preview/PreviewProvider"))
const PrivacyPolicyPreview = lazy(() => import("@/components/pages/privacy-policy/PrivacyPolicyPreview"))

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