import { lazy } from "react"
import Link from "next/link"

import Navbar from "@/components/navbar/Navbar"
import ImageSlider from "@/components/image-slider/ImageSlider"
import Instagram from "@/components/instagram/Instagram"
import Soundcloud from "@/components/soundcloud/Soundcloud"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityImage, urlForImage } from "@/sanity/lib/image"
import { Metadata } from "next"

interface HomeData {
  _id: string,
  title: string,
  subTitle: string,
  content: string,
  contactText: string,
  contactButton: string,
  slug: {
    current: string,
    _type: "slug"
  },
  diashow: {
    image: SanityImage,
    url: string,
    _key: string,
  }[],
  soundcloud: string[],
  _type: "home",
  _rev: string,
  _createdAt: string
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "DJ Raifu"
  const description = "Musik DJ für Afro Beats, Hip-Hop, R&B und mehr. Buche ihn für dein Event"
  const keywords = "DJ Raifu, Afro-Beats, Music, DJ, Hip-Hop, R&B, Events, Veranstaltung"
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  
  const query = groq`*[_type =="logo"][0]{image}`
  const data = await client.fetch(query)

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'DJ Raifu' }],
    openGraph: {
      title: title,
      description: description,
      url: `${domain}`,
      siteName: 'DJ Raifu',
      images: [
        {
          url: urlForImage(data?.image).url(),
          width: 300,
          height: 215,
          alt: "DJ Raifu Logo"
        }
      ],
      locale: "de",
      type: 'website'
    },
  }
}

const Footer = lazy(() => import("@/components/footer/Footer"))

const Home = async () => {
  const query = groq`*[_type == "home"][0]`
  const data: HomeData = await client.fetch(query)

  return (
    <>
      <header className="m-4 md:m-12 lg:m-18 xl:mx-36 xl:my-16">
        <Navbar />
        <ImageSlider imageList={data?.diashow} />
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl lg:mt-16 xl:text-6xl tracking-wide">{data?.title}</h1>
        <p className="text-center text-2xl md:text-3xl md:mt-2 lg:text-4xl xl:text-5xl tracking-wide">{data?.subTitle}</p>
      </header>
      <main className="m-4 flex-grow md:mx-12 lg:m-18 xl:mx-80 xl:my-16">
        <section className="mb-4 mx-auto font-text text-center gap-4 flex flex-col justify-center items-center text-lg md:text-xl lg:w-4/5 3xl:w-2/3">
          <p>{data?.content}</p>
          <p>{data?.contactText}</p>
          <Link className="daisy_btn w-full my-4 md:my-6 lg:my-8 lg:w-1/2 xl:my-12 tracking-wider box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" href="/kontakt">{data?.contactButton}</Link>
        </section>
        <Instagram list={data?.diashow} />
        <Soundcloud list={data?.soundcloud}/>
      </main>
      <Footer />
    </>
  )
}

export default Home
