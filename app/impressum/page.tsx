import { getCachedClient } from "@/sanity/lib/client"
import { imprintQuery } from "@/sanity/lib/query"
import React from 'react'

type Imprint = {
    company: string;
    owner: string;
    data: {
        phone: string;
        email: string;
    }
}

const page = async () => {
    const pageData: Imprint = await getCachedClient()(imprintQuery)

    return (
        <>
            <header className="my-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center">Impressum</h1>
            </header>
            <main className="m-8 md:m-12 lg:m-18 xl:mx-96 xl:my-20 flex-grow font-text text-lg">
                <p className="mb-4">{pageData?.company ?? ""}</p>
                <p>Inhaber: {pageData?.owner ?? ""}</p>

                <ul className="mt-8">
                    <li className="mb-2">
                        Tel: <a href={`tel:${pageData?.data.phone.replace(/\s/g, "") ?? ""}`} rel="noopener noreferrer">{pageData?.data.phone}</a>
                    </li>
                    <li className="mb-2">
                        E-Mail: <a href={`mailto:${pageData?.data.email ?? ""}`} rel="noopener noreferrer"> {pageData?.data.email}</a>
                    </li>
                </ul>
            </main>
        </>

    )
}

export default page