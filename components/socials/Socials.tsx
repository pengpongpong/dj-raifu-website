import React from 'react'
import Image from "next/image"
import Link from "next/link"
import soundcloud from "public/icons/bxl-soundcloud.svg"
import instagram from "public/icons/bxl-instagram.svg"
import tiktok from "public/icons/bxl-tiktok.svg"
import facebook from "public/icons/bxl-facebook.svg"
import twitter from "public/icons/bxl-twitter.svg"
import heatwave from "public/icons/heatwave.webp"

const Socials = ({ styles }: { styles: { container: string, icon: string } }) => {
    return (
        <nav>
            <ul className={styles.container}>
                <li>
                    <Link aria-label="visit Soundcloud profile" href="https://soundcloud.com/djraifu" rel="noreferrer noopener">
                        <Image className={styles.icon} src={soundcloud} alt="soundcloud icon" />
                    </Link>
                </li>
                <li>
                    <Link aria-label="visit Instagram DJ Raifu profile" href="https://www.instagram.com/dj.raifu/" rel="noreferrer noopener">
                        <Image className={styles.icon} src={instagram} alt="instagram icon" />
                    </Link>
                </li>
                <li>
                    <Link aria-label="visit TikTok profile" href="https://www.tiktok.com/@dj.raifu?_t=8eGTzTctYiZ&_r=1" rel="noreferrer noopener">
                        <Image className={styles.icon} src={tiktok} alt="tiktok icon" />
                    </Link>
                </li>
                <li>
                    <Link aria-label="visit Facebook profile" href="https://www.facebook.com/raifu.absenger" rel="noreferrer noopener">
                        <Image className={styles.icon} src={facebook} alt="facebook icon" />
                    </Link>
                </li>
                <li>
                    <Link aria-label="visit Twitter profile" href="https://twitter.com/djraifu" rel="noreferrer noopener">
                        <Image className={styles.icon} src={twitter} alt="twitter icon" />
                    </Link>
                </li>
                <li>
                    <Link aria-label="visit Instagram Heatwave profile" href="https://www.instagram.com/heatwave.association/" rel="noreferrer noopener">
                        <Image className={styles.icon} style={{width: "1.5rem"}} src={heatwave} alt="twitter icon" />
                    </Link>
                </li>
            </ul>





        </nav>
    )
}

export default Socials