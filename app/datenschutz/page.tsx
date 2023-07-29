import React from 'react'
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { ShowCookieModal } from "@/components/cookie-banner/CookieBanner"
import { Metadata } from "next"

interface PrivacyPolicy {
  title: string,
  subTitle: string,
  content: {
    title: string,
    textContent: string[]
  }[]
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "DJ Raifu | Datenschutz"
  const description = "Information zu Datenschutz"
  const keywords = "Datenschutz, Cookies"
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'DJ Raifu' }],
    openGraph: {
      title: title,
      description: description,
      url: `${domain}/datenschutz`,
      siteName: 'DJ Raifu | Datenschutz',
      images: [],
      locale: "de",
      type: 'website',
    },
  }
}

const PrivacyPolicyPage = async () => {
  const query = groq`*[_type == "privacyPolicy"][0]`
  const data: PrivacyPolicy = await client.fetch(query)

  return (
    <>
      <header className="mx-4 mt-8 font-text md:mt-12 md:mx-12 lg:mx-24 xl:max-w-[1200px] xl:mx-auto">
        <h1 className="mb-8 text-4xl text-center tracking-wider">{data?.title}</h1>
        <p>{data?.subTitle}</p>
      </header>
      <main className="m-4 mb-8 flex flex-col font-text md:mx-12 lg:mx-24 xl:max-w-[1200px] xl:mx-auto">
        {data?.content?.map(obj => {
          return (
            <section key={obj.title}>
              <h2 className="my-4 mt-8 text-lg">{obj.title}</h2>
              {obj.textContent.map(item => {
                return (<p className="mb-2 md:mb-4 ml-2 md:ml-4" key={item}>{item}</p>)
              })}
            </section>
          )
        })}
        <ShowCookieModal text="Öffne Cookie Einstellung" styles="my-8 lg:w-1/2 lg:mx-auto daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out"/>
      </main>
    </>
  )
}

export default PrivacyPolicyPage