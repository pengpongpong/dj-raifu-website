import React from 'react'
import Link from "next/link"

import ImageSlider from "@/components/image-slider/ImageSlider"
import Instagram from "@/components/instagram/Instagram"
import Soundcloud from "@/components/soundcloud/Soundcloud"

import { SanityImage } from "@/sanity/lib/image"

export interface HomeData {
    _id: string,
    title: string,
    subTitle: string,
    content: string,
    contactText: string,
    contactButton: string,
    slug: {
        current: string,
        _type: "slug"
    },
    diashow: {
        image: SanityImage,
        url: string,
        _key: string,
    }[],
    soundcloud: string[],
    _type: "home",
    _rev: string,
    _createdAt: string
}

const Home = ({ data }: { data: HomeData }) => {
    return (
        <>
            <header className="m-4 md:m-12 lg:m-18 xl:mx-36 xl:my-16">
                <ImageSlider imageList={data?.diashow} />
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl lg:mt-16 xl:text-6xl tracking-wide">{data?.title}</h1>
                <p className="text-center text-2xl md:text-3xl md:mt-2 lg:text-4xl xl:text-5xl tracking-wide">{data?.subTitle}</p>
            </header>
            <main className="m-4 flex-grow md:mx-12 lg:m-18 xl:mx-80 xl:my-16">
                <section className="mb-4 mx-auto font-text text-center gap-4 flex flex-col justify-center items-center text-lg md:text-xl lg:w-4/5 3xl:w-2/3">
                    <p>{data?.content}</p>
                    <p>{data?.contactText}</p>
                    <Link className="daisy_btn w-full my-4 md:my-6 lg:my-8 lg:w-1/2 xl:my-12 tracking-wider box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/kontakt">{data?.contactButton}</Link>
                </section>
                <Instagram list={data?.diashow} />
                <Soundcloud list={data?.soundcloud} />
            </main>
        </>
    )
}

export default Home