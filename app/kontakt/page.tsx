import React from 'react'
import ContactForm from "@/components/contact-form/ContactForm"
import { Metadata } from "next"

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

const ContactPage = () => {
    return (
        <>
            <header>
                <h1 className="my-8 font-text text-4xl text-center tracking-wider">Kontakt</h1>
            </header>

            <main className="m-4">
                <ContactForm />
            </main>
        </>
    )
}

export default ContactPage