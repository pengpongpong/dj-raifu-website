import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { cachedClient } from "@/sanity/lib/client"
import { navQuery } from "@/sanity/lib/query"
import Link from 'next/link'

export default async function NotFound() {
    const navData = await cachedClient(navQuery)

    return (
        <>
            <Navbar navData={navData} />
            <main className="py-24 flex flex-col gap-8 justify-center items-center font-text bg-black text-white">
                <h1 className="text-6xl">Oops!</h1>
                <p>404 - Seite nicht gefunden!</p>
                <p>
                    Gehe zu <Link className="underline" href="/">Home</Link>
                </p>
            </main>
            <Footer />
        </>

    )
}