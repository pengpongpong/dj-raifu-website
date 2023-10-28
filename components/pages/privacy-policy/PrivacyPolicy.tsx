import React from 'react'
import { ShowCookieModal } from "@/components/cookie-banner/CookieBanner"
import { Seo } from "@/sanity/lib/query"

export interface PrivacyPolicyProps {
    title: string,
    subTitle: string,
    content: {
        title: string,
        textContent: string[]
    }[],
    seo: Seo
}

const PrivacyPolicy = ({ pageData }: { pageData: PrivacyPolicyProps }) => {
    return (
        <>
            <header className="mx-4 mt-8 font-text md:mt-12 md:mx-12 lg:mx-24 xl:max-w-[1200px] xl:mx-auto">
                <h1 className="mb-8 text-4xl text-center tracking-wider">{pageData?.title}</h1>
                <p>{pageData?.subTitle}</p>
            </header>
            <main className="m-4 mb-8 flex flex-col font-text md:mx-12 lg:mx-24 xl:max-w-[1200px] xl:mx-auto">
                {pageData?.content?.map(obj => {
                    return (
                        <section key={obj.title}>
                            <h2 className="my-4 mt-8 text-lg">{obj.title}</h2>
                            {obj.textContent.map(item => {
                                return (<p className="mb-2 md:mb-4 ml-2 md:ml-4" key={item}>{item}</p>)
                            })}
                        </section>
                    )
                })}
                <ShowCookieModal text="Öffne Cookie Einstellung" styles="vinyl my-8 lg:w-1/2 lg:mx-auto daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" />
            </main>
        </>
    )
}

export default PrivacyPolicy