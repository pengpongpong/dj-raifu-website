"use client"
import React, { lazy, useEffect } from 'react'
import Link from "next/link"

import { SanityImage } from "@/sanity/lib/image"
import ImageSlider from "@/components/image-slider/ImageSlider"
import { Seo } from "@/sanity/lib/query"

export interface HomeData {
    _id: string,
    title: string,
    subTitle: string,
    content: string,
    contactText: string,
    contactButton: string,
    slug: {
        current: string,
    },
    diashow: {
        image: SanityImage,
        url: string,
        _key: string,
        diashow: boolean
    }[],
    soundcloud: string[],
    spotify: string[],
    seo: Seo
}

const Instagram = lazy(() => import("@/components/instagram/Instagram"))
const Soundcloud = lazy(() => import("@/components/soundcloud/Soundcloud"))
const Spotify = lazy(() => import("@/components/spotify/Spotify"))

const Home = ({ data }: { data: HomeData }) => {

    // show scrollbar after animation
    useEffect(() => {
        const body = document.querySelector("body")
        if (body) {
            const animate = () => {
                body.style.overflow = "hidden"
                setTimeout(() => {
                    body.style.overflow = "auto"
                }, 3500)
            }
            requestAnimationFrame(animate)
        }
    }, [])

    return (
        <>
            <header className="m-4 md:m-12 lg:m-18 xl:mx-36 xl:mt-0 invisible opacity-0 animate-[showVisibility_2s_2.5s_ease-in-out_forwards] motion-reduce:visible motion-reduce:animate-none">

                <ImageSlider imageList={data?.diashow} />
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl lg:mt-16 xl:text-6xl tracking-wide">{data?.title}</h1>
                <p className="text-center text-2xl md:text-3xl md:mt-2 lg:text-4xl xl:text-5xl tracking-wide">{data?.subTitle}</p>
            </header>
            <main className="m-4 flex-grow md:mx-12 lg:m-18 xl:mb-16 invisible opacity-0 animate-[showVisibility_2s_2.5s_ease-in-out_forwards] motion-reduce:visible motion-reduce:animate-none">
                <div className="mb-4 mx-auto font-text text-center gap-4 flex flex-col justify-center items-center text-lg md:text-xl lg:w-4/5 3xl:w-2/3">
                    <p>{data?.content}</p>
                    <p>{data?.contactText}</p>
                    <Link className="daisy_btn w-full my-4 md:my-6 lg:my-8 lg:w-1/2 xl:my-12 tracking-wider box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/kontakt">{data?.contactButton}</Link>
                </div>

                {!!data?.diashow && <Instagram list={data?.diashow} />}
                {!!data?.spotify && <Spotify list={data?.spotify} />}
                {!!data?.soundcloud && <Soundcloud list={data?.soundcloud} />}
                
            </main>
        </>
    )
}

export default Home