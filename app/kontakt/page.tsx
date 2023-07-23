import React from 'react'
import ContactForm from "@/components/contact-form/ContactForm"

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