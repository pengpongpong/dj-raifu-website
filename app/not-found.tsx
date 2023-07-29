import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="my-24 flex flex-col gap-8 justify-center items-center font-text">
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