import Image from "next/image"
import Link from "next/link"
import React from 'react'
import instagramIcon from "public/icons/bxl-instagram.svg"

const Card = ({ imageUrl, url }: InstagramList) => {
    return (
        <picture className="max-w-[400px] h-[400px] md:max-w-[300px] inline-block p-2 bg-black border border-white rounded-lg relative box-shadow xl:hover:scale-125 transition-transform duration-300 ease-in-out hover:z-50">
            <Link href={url} rel="noreferrer noopener" target="_blank">
                <Image src={imageUrl} alt="" width={2560} height={1440} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <Image className="absolute bottom-2 right-2" src={instagramIcon} alt="" width={40} height={40} />
            </Link>
        </picture>
    )
}

interface InstagramList {
    url: string,
    imageUrl: string
}

const Instagram = ({ list }: { list: InstagramList[] }) => {

    return (
        <>
            <section className="mb-8 mt-8 mx-auto flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 lg:max-w-[1300px] justify-center md:flex-wrap">
                {list?.map(item => (<Card imageUrl={item.imageUrl} url={item.url} key={item.url} />))}
            </section>
            <hr className="py-4 md:mt-8 md:mx-4 lg:mx-32 lg:mt-12 lg:mb-6 xl:mx-36 3xl:mx-72" />
        </>

    )
}

export default Instagram