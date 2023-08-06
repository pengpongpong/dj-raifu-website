import React, { lazy } from 'react'
import { Metadata } from "next"
import { draftMode } from "next/headers"

import Contact from "@/components/pages/contact/Contact"
import { getCachedClient } from "@/sanity/lib/client"
import { contactQuery } from "@/sanity/lib/query"

export async function generateMetadata(): Promise<Metadata> {
    const title = "DJ Raifu | Kontakt"
    const description = "Trete in Kontakt mit DJ Raifu über das Kontaktformular"
    const keywords = "Kontakt, Kontaktformular"
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    return {
        title: title,
        description: description,
        keywords: keywords,
        authors: [{ name: 'DJ Raifu' }],
        openGraph: {
            title: title,
            description: description,
            url: `${domain}/kontakt`,
            siteName: 'DJ Raifu | Kontakt',
            images: [],
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

    const pageData = await getCachedClient(preview)(contactQuery)

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