import React, { lazy } from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import Contact, { ContactProps } from "@/components/pages/contact/Contact"
import { cachedClient, getCachedClient } from "@/sanity/lib/client"
import { contactQuery } from "@/sanity/lib/query"

export async function generateMetadata(): Promise<Metadata> {
    const domain = process.env.NEXT_PUBLIC_DOMAIN
    const data: ContactProps = await cachedClient(contactQuery)

    return {
        title: data?.seo.title,
        description: data?.seo.description,
        keywords: data?.seo.keywords,
        authors: [{ name: 'DJ Raifu' }],
        metadataBase: new URL(domain as string),
        alternates: {
          canonical: "/kontakt"
        },
        openGraph: {
            title: data?.seo.title,
            description: data?.seo.description,
            url: `${domain}/kontakt`,
            siteName: data?.seo.title,
            locale: "de",
            type: 'website',
        },
    }
}

const PreviewProvider = lazy(() => import("@/components/sanity-preview/PreviewProvider"))
const ContactPreview = lazy(() => import("@/components/pages/contact/ContactPreview"))

const ContactPage = async () => {
    // preview mode
    const preview = draftMode().isEnabled
        ? { token: process.env.SANITY_API_READ_TOKEN }
        : undefined

    const pageData: ContactProps = await getCachedClient(preview)(contactQuery)

    if (preview && preview.token) {
        return (
            <>
                <PreviewProvider token={preview.token}>
                    <ContactPreview pageData={pageData} />
                </PreviewProvider>
            </>
        )
    }

    return (<Contact pageData={pageData} />)
}

export default ContactPage