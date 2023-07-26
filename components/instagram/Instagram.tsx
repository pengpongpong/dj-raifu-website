import Image from "next/image"
import Link from "next/link"
import React from 'react'
import instagramIcon from "public/icons/bxl-instagram.svg"

const Card = ({ imageUrl, url }: InstagramList) => {
    return (
        <picture className="inline-block p-2 border border-white rounded-lg relative box-shadow">
            <Link href={url} rel="noreferrer noopener" target="_blank">
                <Image src={imageUrl} alt="" width={400} height={300} />
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
        <section className="mb-8 mt-8 flex flex-col gap-4">
            {list.map(item => (<Card imageUrl={item.imageUrl} url={item.url} key={item.url} />))}
            <hr className="my-4"/>
        </section>
    )
}

export default Instagram