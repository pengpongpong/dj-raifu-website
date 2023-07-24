import React from 'react'
import Link from "next/link"
import Image from "next/image"

import logo from "public/logo.png"
import { Socials } from "../footer/Footer"

const Navbar = () => {
    return (
        <nav className="mt-8 daisy_navbar flex-col justify-between items-center gap-4 font-text">
            <Image src={logo} width={150} height={100} alt="Dj Raifu logo" />
            <Socials styles="w-full mt-2 flex justify-around items-center"/>
            <ul className="mt-2 gap-4 tracking-wide">
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow">
                    <Link href="/">Home</Link>
                </li>
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow">
                    <Link href="/ueber-mich">Über mich</Link>
                </li>
                <li className="daisy_btn text-base bg-black text-white font-normal box-shadow">
                    <Link href="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar