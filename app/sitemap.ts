import { client } from "@/sanity/lib/client"
import { MetadataRoute } from 'next'
import { groq } from "next-sanity"

interface Data {
    _type: string;
    _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const query = groq`*[_type == "home" || _type == "aboutMe" || _type == "privacyPolicy"]{ _updatedAt, _type}`
    const data: Data[] = await client.fetch(query)
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    let updateDate = {
        home: "",
        aboutMe: "",
        contact: "",
        privacyPolicy: ""
    }

    data?.map((obj) => {
        if (obj._type === "home") {
            updateDate.home = obj._updatedAt
        }
        if (obj._type === "aboutMe") {
            updateDate.aboutMe = obj._updatedAt
        }
        if (obj._type === "privacyPolicy") {
            updateDate.privacyPolicy = obj._updatedAt
        }
    })


    return [
        {
            url: `${domain}`,
            lastModified: updateDate.home,
        },
        {
            url: `${domain}/ueber-mich`,
            lastModified: updateDate.aboutMe,
        },
        {
            url: `${domain}/kontakt`,
            lastModified: new Date(2023, 7),
        },
        {
            url: `${domain}/datenschutz`,
            lastModified: updateDate.privacyPolicy,
        },
    ]
}