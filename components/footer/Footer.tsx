import React from 'react'
import Link from "next/link"
import Socials from "../socials/Socials"

const Footer = () => {
    const year = new Date().getFullYear()

    const socialStyles = {
        container: "flex gap-12 md:gap-12 lg:gap-16",
        icon: "w-6 md:w-6 xl:w-8 hover:scale-150 transition-transform duration-300 ease-in-out"
    }

    return (
        <footer className="daisy_footer daisy_footer-center gap-8 p-10 bg-black text-white border-t border-white font-text md:text-base">
            <Socials styles={socialStyles} />
            <nav>
                <ul className="grid grid-flow-col gap-4 text-sm md:text-base md:gap-6 lg:gap-12">
                    <li>
                        <Link href="/ueber-mich" className="daisy_link daisy_link-hover">Über Mich</Link>
                    </li>
                    <li>
                        <Link href="/kontakt" className="daisy_link daisy_link-hover">Kontakt</Link>
                    </li>
                    <li>
                        <Link href="/datenschutz" className="daisy_link daisy_link-hover">Datenschutz</Link>
                    </li>
                    <li>
                        <Link href="/impressum" className="daisy_link daisy_link-hover">Impressum</Link>
                    </li>
                </ul>
            </nav>
            <p>Copyright &copy; {year} - DJ Raifu</p>
        </footer>
    )
}

export default Footer