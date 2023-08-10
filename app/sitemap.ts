import { cachedClient } from "@/sanity/lib/client"
import { MetadataRoute } from 'next'
import { groq } from "next-sanity"

interface Data {
    _type: string;
    _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const query = groq`*[_type == "home" || _type == "aboutMe" || _type == "privacyPolicy" || _type == "contact"]{ _updatedAt, _type}`
    const data: Data[] = await cachedClient(query)

    let updateDate = {
        home: "",
        aboutMe: "",
        contact: "",
        privacyPolicy: "",
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
        if (obj._type === "contact") {
            updateDate.contact = obj._updatedAt
        }
    })


    return [
        {
            url: `https://www.djraifu.com`,
            lastModified: updateDate.home,
        },
        {
            url: `https://www.djraifu.com/ueber-mich`,
            lastModified: updateDate.aboutMe,
        },
        {
            url: `https://www.djraifu.com/kontakt`,
            lastModified: updateDate.contact,
        },
        {
            url: `https://www.djraifu.com/datenschutz`,
            lastModified: updateDate.privacyPolicy,
        },
    ]
}