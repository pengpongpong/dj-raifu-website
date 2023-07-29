import React from 'react'
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { ShowCookieModal } from "@/components/cookie-banner/CookieBanner"

interface PrivacyPolicy {
  title: string,
  subTitle: string,
  content: {
    title: string,
    textContent: string[]
  }[]
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
        <ShowCookieModal text="Öffne Cookie Einstellung" styles="my-8 daisy_btn tracking-wide border-black text-white box-shadow"/>
      </main>
    </>
  )
}

export default PrivacyPolicyPage