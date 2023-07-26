import { lazy } from "react"
import Link from "next/link"

import Navbar from "@/components/navbar/Navbar"
import ImageSlider from "@/components/image-slider/ImageSlider"
import Instagram from "@/components/instagram/Instagram"
import Soundcloud from "@/components/soundcloud/Soundcloud"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityImage } from "@/sanity/lib/image"

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
  images: SanityImage[],
  instagram: {
    url: string,
    imageUrl: string
  }[],
  soundcloud: string[],
  _type: "home",
  _rev: string,
  _createdAt: string
}

const Footer = lazy(() => import("@/components/footer/Footer"))

const Home = async () => {
  const query = groq`*[_type == "home"][0]`
  const data: HomeData = await client.fetch(query)

  return (
    <>
      <header className="m-4">
        <Navbar />
        <ImageSlider imageList={data?.images} />
        <h1 className="text-center text-3xl tracking-wide">{data?.title}</h1>
        <p className="text-center text-2xl tracking-wide">{data?.subTitle}</p>
      </header>
      <main className="m-4 mt-8 flex-grow">
        <section className="mb-4 font-text text-center gap-4 flex flex-col">
          <p>{data?.content}</p>
          <p>{data?.contactText}</p>
          <Link className="daisy_btn my-4 tracking-wider box-shadow" href="/kontakt">{data?.contactButton}</Link>
        </section>
        <Instagram list={data?.instagram} />
        <Soundcloud />
      </main>
      <Footer />
    </>
  )
}

export default Home
