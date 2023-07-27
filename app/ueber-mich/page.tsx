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
            <header className="mt-8 font-text text-center tracking-wide">
                <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl xl:text-5xl">{data?.title}</h1>
                <p className="text-xl md:text-2xl md:mt-2 lg:text-3xl xl:text-3xl">{data?.subTitle}</p>
            </header>
            <main className="m-4 mb-8 font-text md:m-16 md:mb-12 lg:mx-28 lg:mb-16 xl:max-w-[1200px] xl:mx-auto flex flex-col justify-center items-center">
                <picture className="mb-8 w-full flex justify-center items-center">
                    <Image className="border border-white" src={urlForImage(data?.image).url()} alt="" width={2560} height={1440} style={{ width: "auto", height: "100%", objectFit: "cover" }} />
                </picture>
                <p className="text-base font-thin md:text-lg w-full lg:my-4 tracking-wide">{data?.content}</p>
            </main>
        </>
    )
}

export default AboutMePage