import React from 'react'
import Link from "next/link"
import Image from "next/image"

import logo from "public/logo.png"
import Socials from "../socials/Socials"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { urlForImage } from "@/sanity/lib/image"

const Navbar = async () => {
    const query = groq`*[_type =="logo"][0]{image}`
    const data = await client.fetch(query)

    const socialStyles = {
        container: "mt-2 flex gap-12 md:gap-16 lg:gap-24",
        icon: "w-6 md:w-7 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out"
    }

    return (
        <nav className="mt-8 daisy_navbar flex-col justify-between items-center gap-4 font-text">
            <Image src={urlForImage(data?.image).url()} className="w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]" width={2560} height={1440} priority alt="Dj Raifu logo" />
            <Socials styles={socialStyles} />
            <ul className="mt-2 gap-4 md:gap-6 md:mt-4 lg:gap-8 xl:gap-12 xl:mt-6 3xl:gap-16 tracking-wide md:tracking-wider lg:tracking-widest">
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    <Link href="/">Home</Link>
                </li>
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    <Link href="/ueber-mich">Über mich</Link>
                </li>
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    <Link href="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar