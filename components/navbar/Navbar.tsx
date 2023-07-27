import React from 'react'
import Link from "next/link"
import Image from "next/image"

import logo from "public/logo.png"
import { Socials } from "../footer/Footer"

const Navbar = () => {
    return (
        <nav className="mt-2 md:mt-0 daisy_navbar flex-col justify-between items-center gap-4 font-text">
            <Image src={logo} className="w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]" width={2560} height={1440} priority alt="Dj Raifu logo" />
            <Socials styles="w-full mt-2 md:mt-4 lg:mt-6 xl:mt-8 flex justify-around lg:justify-center lg:gap-36 xl:gap-44 items-center"/>
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