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
                <Image src={soundcloud} alt="soundcloud icon" />
            </Link>
            <Link href="https://www.instagram.com/dj.raifu/" rel="noreferrer noopener">
                <Image src={instagram} alt="instagram icon" />
            </Link>
            <Link href="https://www.tiktok.com/@dj.raifu?_t=8eGTzTctYiZ&_r=1" rel="noreferrer noopener">
                <Image src={tiktok} alt="tiktok icon" />
            </Link>
            <Link href="https://www.facebook.com/raifu.absenger" rel="noreferrer noopener">
                <Image src={facebook} alt="facebook icon" />
            </Link>
            <Link href="https://twitter.com/djraifu" rel="noreferrer noopener">
                <Image src={twitter} alt="twitter icon" />
            </Link>
        </nav>
    )
}

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="daisy_footer daisy_footer-center p-10 bg-black text-white border-t border-white font-text">
            <nav className="grid grid-flow-col gap-4">
                <Link href="/ueber-mich" className="daisy_link daisy_link-hover">Über Mich</Link>
                <Link href="/kontakt" className="daisy_link daisy_link-hover">Kontakt</Link>
                <Link href="/datenschutz" className="daisy_link daisy_link-hover">Datenschutz</Link>
                <Link href="/impressum" className="daisy_link daisy_link-hover">Impressum</Link>
            </nav>
            <Socials styles="flex gap-8"/>
            <p>Copyright © {year} - DJ Raifu</p>
        </footer>
    )
}

export default Footer