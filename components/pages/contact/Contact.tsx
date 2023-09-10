import React from 'react'
import ContactForm from "@/components/contact-form/ContactForm"
import { Seo } from "@/sanity/lib/query";

export interface ContactProps {
    title: string;
    name: string;
    contactForm: string;
    email: string;
    telephone: string;
    datePicker: string;
    message: string;
    button: string;
    error: {
        name: string;
        select: string;
        email: string;
        telephone: string;
        date: string
    },
    seo: Seo
}

const Contact = ({ pageData }: { pageData: ContactProps }) => {

    return (
        <>
            <header>
                <h1 className="my-8 font-text text-4xl text-center tracking-wider">{pageData?.title}</h1>
            </header>

            <main className="m-4">
                <ContactForm pageData={pageData}/>
            </main>
        </>
    )
}

export default Contact