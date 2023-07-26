import React from 'react'
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

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
      <header className="mx-4 mt-8 font-text">
        <h1 className="mb-8 text-4xl text-center tracking-wider">{data?.title}</h1>
        <p>{data?.subTitle}</p>
      </header>
      <main className="m-4 mb-8 font-text">
        {data?.content?.map(obj => {
          return (
            <div key={obj.title}>
              <h2 className="my-4 mt-8 text-lg">{obj.title}</h2>
              {obj.textContent.map(item => {
                return (<p className="mb-2" key={item}>{item}</p>)
              })}
            </div>
          )
        })}
      </main>
    </>
  )
}

export default PrivacyPolicyPage