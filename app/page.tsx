import ImageSlider from "@/components/image-slider/ImageSlider"
import Image from "next/image"
import Link from "next/link"
import logo from "public/logo.png"

import Instagram from "@/components/instagram/Instagram"
import Soundcloud from "@/components/soundcloud/Soundcloud"
import Footer from "@/components/footer/Footer"

export default function Home() {

  return (
    <>
      <header className="mt-8">
        <nav className="daisy_navbar flex-col justify-between items-center gap-4 font-text">
          <Image src={logo} width={150} height={100} alt="Dj Raifu logo" />
          <ul className="mt-4 gap-4 tracking-wide">
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
        <ImageSlider />
        <h1 className="text-center text-3xl tracking-wide">Willkommen bei DJ Raifu</h1>
        <p className="text-center text-2xl tracking-wide">Afro Beats und mehr</p>
      </header>
      <main className="m-4 mt-8 flex-grow">
        <section className="mb-4 font-text text-center gap-4 flex flex-col">
          <p>
            DJ Raifu ist ein leidenschaftlicher DJ, der sich auf Afro Beats und andere Genres spezialisiert hat. Lassen Sie ihn Ihre Veranstaltung mit seinem einzigartigen Sound und Stil unvergesslich machen.
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
