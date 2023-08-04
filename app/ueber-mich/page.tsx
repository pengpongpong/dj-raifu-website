import React from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { aboutMeQuery } from "@/sanity/lib/query"

import AboutMe, { AboutMeProps } from "@/components/pages/about-me/AboutMe"

import PreviewProvider from "@/components/sanity-preview/PreviewProvider"
import AboutMePreview from "@/components/pages/about-me/AboutMePreview"

// meta tags
export async function generateMetadata(): Promise<Metadata> {
    const title = "DJ Raifu | Über mich"
    const text = "Musik DJ für Afro Beats, Hip-Hop, R&B und mehr. Buche ihn für dein Event"
    const keywords = ""
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    const data = await cachedClient(aboutMeQuery)

    return {
        title: title,
        description: text,
        keywords: keywords,
        authors: [{ name: 'DJ Raifu' }],
        openGraph: {
            title: title,
            description: text,
            url: `${domain}/ueber-mich`,
            siteName: 'DJ Raifu | Über mich',
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