import React, { ReactNode } from 'react'
import Image from "next/image"
import Link from "next/link"
import InstagramVideo from "./InstagramVideo"
import InstagramImage from "./InstagramImage"

export interface InstagramData {
    media_url: string,
    media_type: mediaType,
    permalink: string,
    id: string
}

type mediaType = "CAROUSEL_ALBUM" | "IMAGE" | "VIDEO"

export const Images = ({ list }: { list: InstagramData[] }) => {
    return list?.map(obj => {
        return (
            <picture key={obj.id}>
                <Image src={obj.media_url} width={2560} height={1440} alt=""
                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                />
                <p>{obj.id}</p>
                <input type="checkbox" className="daisy_checkbox" defaultValue={obj.id} />
            </picture>
        )
    })
}

const Album = ({ list }: { list: InstagramData[] }) => {
    return list?.map(obj => {
        return (
            <picture key={obj.id}>
                <Link href={`/dashboard/instagram/${obj.id}`}>
                    <Image src={obj.media_url} width={2560} height={1440} alt=""
                        sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                    />
                </Link>
            </picture>
        )
    })
}

const InstagramPage = async () => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
    const user = process.env.NEXT_PUBLIC_INSTAGRAM_USER

    // instagram api
    const link = `
    https://graph.instagram.com/v17.0/${user}/media?access_token=${token}&fields=media_url,cap,children,media_type,permalink`

    // fetch data from api
    const fetchData = await fetch(link)
        .then(res => res.json())

    const { data }: { data: InstagramData[] } = fetchData

    const CAROUSEL_ALBUM = data.filter(obj => obj.media_type === "CAROUSEL_ALBUM")
    const IMAGE = data.filter(obj => obj.media_type === "IMAGE")
    const VIDEO = data.filter(obj => obj.media_type === "VIDEO")

    const Section = ({ children }: { children: ReactNode }) => {
        return (
            <section className="flex flex-col gap-4">
                {children}
            </section>
        )
    }

    return (
        <main className="m-4 font-text">
            <h1 className="my-8 text-center text-4xl">Instagram Media</h1>
            <h2 className="text-xl">Bilder:</h2>
            <InstagramImage list={IMAGE} />

            <Section>
                <h2 className="text-xl">Album:</h2>
                <Album list={CAROUSEL_ALBUM} />
            </Section>

            {/* <Section>
                <h2>Videos:</h2>
                <InstagramVideo list={VIDEO} />
            </Section> */}
        </main>
    )
}

export default InstagramPage