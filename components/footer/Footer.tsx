import React from 'react'
import Image from "next/image"
import Link from "next/link"
import soundcloud from "public/icons/bxl-soundcloud.svg"
import instagram from "public/icons/bxl-instagram.svg"
import tiktok from "public/icons/bxl-tiktok.svg"
import facebook from "public/icons/bxl-facebook.svg"
import twitter from "public/icons/bxl-twitter.svg"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="daisy_footer daisy_footer-center p-10 bg-black text-white border-t border-white font-text">
            <div className="grid grid-flow-col gap-4">
                <Link href="" className="daisy_link daisy_link-hover">Über Mich</Link>
                <Link href="" className="daisy_link daisy_link-hover">Kontakt</Link>
                <Link href="" className="daisy_link daisy_link-hover">Datenschutz</Link>
                <Link href="" className="daisy_link daisy_link-hover">Impressum</Link>
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link href="" rel="noreferrer noopener">
                    <Image src={soundcloud} alt="" />
                </Link>
                <Link href="" rel="noreferrer noopener">
                    <Image src={instagram} alt="" />
                </Link>
                <Link href="" rel="noreferrer noopener">
                    <Image src={tiktok} alt="" />
                </Link>
                <Link href="" rel="noreferrer noopener">
                    <Image src={facebook} alt="" />
                </Link>
                <Link href="" rel="noreferrer noopener">
                    <Image src={twitter} alt="" />
                </Link>
            </div>
            <p>Copyright © {year} - DJ Raifu</p>
        </footer>
    )
}

export default Footer