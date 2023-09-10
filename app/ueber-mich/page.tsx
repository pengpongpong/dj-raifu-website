import React, { lazy } from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { aboutMeQuery } from "@/sanity/lib/query"

import AboutMe, { AboutMeProps } from "@/components/pages/about-me/AboutMe"

// meta tags
export async function generateMetadata(): Promise<Metadata> {
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    const data: AboutMeProps = await cachedClient(aboutMeQuery)

    return {
        title: data?.seo.title,
        description: data?.seo.description,
        keywords: data?.seo.keywords,
        authors: [{ name: 'DJ Raifu' }],
        openGraph: {
            title: data?.seo.title,
            description: data?.seo.description,
            url: `${domain}/ueber-mich`,
            siteName: data?.seo.title,
            images: [
                {
                    url: urlForImage(data?.image).url(),
                    width: 1200,
                    height: 800,
                    alt: "DJ Raifu"
                }
            ],
            locale: "de",
            type: 'website',
        },
    }
}

const PreviewProvider = lazy(() => import("@/components/sanity-preview/PreviewProvider"))
const AboutMePreview = lazy(() => import("@/components/pages/about-me/AboutMePreview"))

const AboutMePage = async () => {
    // preview mode
    const preview = draftMode().isEnabled
        ? { token: process.env.SANITY_API_READ_TOKEN }
        : undefined

    const pageData: AboutMeProps = await getCachedClient(preview)(aboutMeQuery)

    if (preview && preview.token) {
        return (
            <PreviewProvider token={preview.token}>
                <AboutMePreview pageData={pageData} />
            </PreviewProvider>
        )
    }

    return (<AboutMe pageData={pageData} />)
}

export default AboutMePage