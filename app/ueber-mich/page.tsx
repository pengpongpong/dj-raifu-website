import { client } from "@/sanity/lib/client"
import { SanityImage, urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"
import Image from "next/image"
import React from 'react'

interface AboutMe {
    title: string,
    subTitle: string,
    image: SanityImage,
    content: string,
}

const AboutMePage = async () => {
    const query = groq`*[_type == "aboutMe"][0]`
    const data: AboutMe = await client.fetch(query)

    return (
        <>
            <header className="my-8 font-text text-center tracking-wider">
                <h1 className="mb-2 text-3xl">{data?.title}</h1>
                <p className="text-xl">{data?.subTitle}</p>
            </header>
            <main className="m-4 mb-8 font-text">
                <picture className="mb-8 w-full h-[300px] flex justify-center items-center border border-white box-shadow">
                    <Image src={urlForImage(data?.image).url()} alt="" width={2560} height={1440} style={{ width: "auto", height: "100%", objectFit: "cover" }} />
                </picture>
                <p className="text-base font-thin tracking-wide">{data?.content}</p>
            </main>
        </>
    )
}

export default AboutMePage