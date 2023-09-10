import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Socials from "../socials/Socials"
import { SanityImage, urlForImage } from "@/sanity/lib/image"

export interface NavbarProps {
    image: SanityImage
}

const Navbar = ({ navData, main }: { navData: NavbarProps, main?: boolean }) => {
    const socialStyles = {
        container: `${main ? "invisible opacity-0 animate-[showVisibility_2s_2.5s_ease-in-out_forwards] motion-reduce:visible motion-reduce:animate-none" : ""} mt-2 flex gap-12 md:gap-16 lg:gap-24`,
        icon: "w-6 md:w-7 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out"
    }

    return (
        <nav className="mt-8 daisy_navbar flex-col justify-between items-center gap-4 font-text">
            {navData?.image
                ? <Image src={urlForImage(navData?.image).url()} className={`${main ? "translate-y-[40vh] scale-150 animate-[slideUp_2s_1s_ease-in-out_forwards]" : ""} w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] z-10`} width={2560} height={1440} priority alt="Dj Raifu logo" />
                : ""}
            <Socials styles={socialStyles} />
            <ul className={`${main ? "invisible opacity-0 animate-[showVisibility_2s_2s_ease-in-out_forwards] motion-reduce:visible motion-reduce:animate-none" : ""} mt-2 gap-4 md:gap-6 md:mt-4 lg:gap-8 xl:gap-12 xl:mt-6 3xl:gap-16 tracking-wide md:tracking-wider lg:tracking-widest`}>
                <li>
                    <Link className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/">Home</Link>
                </li>
                <li>
                    <Link className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/ueber-mich">Über mich</Link>
                </li>
                <li>
                    <Link className="daisy_btn text-base bg-black text-white font-normal box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar