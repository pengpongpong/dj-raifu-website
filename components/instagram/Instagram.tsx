import Image from "next/image"
import Link from "next/link"
import React, { useMemo } from 'react'
import instagramIcon from "public/icons/bxl-instagram.svg"
import { SanityImage, urlForImage } from "@/sanity/lib/image"

const Card = ({ image }: { image: InstagramList }) => {

    return (
        <Link className="w-full h-full inline-block" key={image._key} href={image.url} rel="noreferrer noopener" target="_blank">
            <Image src={urlForImage(image.image).url()} alt="instagram image" width={350} height={350} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            <Image className="absolute bottom-2 right-2" src={instagramIcon} alt="instagram icon" width={40} height={40} />
        </Link>
    )
}

interface InstagramList {
    url: string,
    image: SanityImage,
    _key: string
}

const Instagram = ({ list }: { list: InstagramList[] }) => {

    const items = useMemo(() => {
        return list?.map(item => (
            <li key={item._key} className="w-auto h-auto md:w-[400px] p-4 overflow-hidden bg-black border border-white rounded-lg relative box-shadow xl:hover:scale-125 transition-transform duration-300 ease-in-out hover:z-20">
                <Card image={item} />
            </li>))
    }, [list])

    return (
        <>
            <section className="mb-8 mt-8 max-w-[1600px] mx-auto flex justify-center items-center">
                <ul className="flex flex-col md:flex-row gap-6 md:gap-8 lg:max-w-[1300px] justify-center md:flex-wrap">
                    {items}
                </ul>
            </section>
            <hr className="py-4 md:mt-8 md:mx-4 lg:mx-32 lg:mt-12 lg:mb-6 xl:mx-36 3xl:mx-72" />
        </>

    )
}

export default Instagram