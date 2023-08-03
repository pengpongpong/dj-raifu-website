import Image from "next/image"
import Link from "next/link"
import React from 'react'
import instagramIcon from "public/icons/bxl-instagram.svg"
import { SanityImage, urlForImage } from "@/sanity/lib/image"

const Card = ({ image }: {image: InstagramList}) => {

    return (
        <picture key={image._key} className="max-w-[400px] h-fit md:max-w-[550px] inline-block p-2 bg-black border border-white rounded-lg relative box-shadow xl:hover:scale-125 transition-transform duration-300 ease-in-out hover:z-50">
            <Link href={image.url} rel="noreferrer noopener" target="_blank">
                <Image src={urlForImage(image.image).size(2560, 1440).url()} alt="" width={2560} height={1440} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                <Image className="absolute bottom-2 right-2" src={instagramIcon} alt="" width={40} height={40} />
            </Link>
        </picture>
    )
}

interface InstagramList {
    url: string,
    image: SanityImage,
    _key: string
}

const Instagram = ({ list }: { list: InstagramList[] }) => {

    return (
        <>
            <section className="mb-8 mt-8 mx-auto flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 lg:max-w-[1300px] justify-center md:flex-wrap">
                {list?.map(item => (<Card image={item} key={item._key}/>))}
            </section>
            <hr className="py-4 md:mt-8 md:mx-4 lg:mx-32 lg:mt-12 lg:mb-6 xl:mx-36 3xl:mx-72" />
        </>

    )
}

export default Instagram