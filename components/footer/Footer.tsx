import React from 'react'
import Image from "next/image"
import Link from "next/link"
import soundcloud from "public/icons/bxl-soundcloud.svg"
import instagram from "public/icons/bxl-instagram.svg"
import tiktok from "public/icons/bxl-tiktok.svg"
import facebook from "public/icons/bxl-facebook.svg"
import twitter from "public/icons/bxl-twitter.svg"

export const Socials = ({styles}: {styles: string}) => {
    return (
        <nav className={styles}>
            <Link href="https://soundcloud.com/djraifu" rel="noreferrer noopener">
                <Image className="w-4 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out" src={soundcloud} alt="soundcloud icon" />
            </Link>
            <Link href="https://www.instagram.com/dj.raifu/" rel="noreferrer noopener">
                <Image className="w-4 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out" src={instagram} alt="instagram icon" />
            </Link>
            <Link href="https://www.tiktok.com/@dj.raifu?_t=8eGTzTctYiZ&_r=1" rel="noreferrer noopener">
                <Image className="w-4 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out" src={tiktok} alt="tiktok icon" />
            </Link>
            <Link href="https://www.facebook.com/raifu.absenger" rel="noreferrer noopener">
                <Image className="w-4 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out" src={facebook} alt="facebook icon" />
            </Link>
            <Link href="https://twitter.com/djraifu" rel="noreferrer noopener">
                <Image className="w-4 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out" src={twitter} alt="twitter icon" />
            </Link>
        </nav>
    )
}

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="daisy_footer daisy_footer-center p-10 bg-black text-white border-t border-white font-text md:text-base">
            <Socials styles="flex gap-8 md:gap-12 lg:gap-16"/>
            <nav className="grid grid-flow-col gap-4 text-sm md:text-base md:gap-6 lg:gap-12">
                <Link href="/ueber-mich" className="daisy_link daisy_link-hover">Über Mich</Link>
                <Link href="/kontakt" className="daisy_link daisy_link-hover">Kontakt</Link>
                <Link href="/datenschutz" className="daisy_link daisy_link-hover">Datenschutz</Link>
            </nav>
            <p>Copyright © {year} - DJ Raifu</p>
        </footer>
    )
}

export default Footer