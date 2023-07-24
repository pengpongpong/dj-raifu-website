import { lazy } from "react"
import Link from "next/link"

import Navbar from "@/components/navbar/Navbar"
import ImageSlider from "@/components/image-slider/ImageSlider"
import Instagram from "@/components/instagram/Instagram"
import Soundcloud from "@/components/soundcloud/Soundcloud"

const Footer = lazy(() => import("@/components/footer/Footer"))

export default function Home() {

  return (
    <>
      <header>
        <Navbar />
        <ImageSlider />
        <h1 className="text-center text-3xl tracking-wide">Willkommen bei DJ Raifu</h1>
        <p className="text-center text-2xl tracking-wide">Afro Beats und mehr</p>
      </header>
      <main className="m-4 mt-8 flex-grow">
        <section className="mb-4 font-text text-center gap-4 flex flex-col">
          <p>
            DJ Raifu ist ein leidenschaftlicher DJ, der sich auf Afro Beats, Hip-Hop, R&B und andere Genres spezialisiert hat. Lassen Sie ihn Ihre Veranstaltung mit seinem einzigartigen Sound und Stil unvergesslich machen.
          </p>
          <p>Kontaktieren Sie ihn noch heute, um Ihre Veranstaltung zu buchen!</p>
          <Link className="daisy_btn my-4 tracking-wider box-shadow" href="/kontakt">Buche hier</Link>
        </section>
        <Instagram list={[{ url: "/diashow1.jpg" }, { url: "/diashow2.jpg" }]} />
        <Soundcloud />
      </main>
      <Footer />
    </>
  )
}
