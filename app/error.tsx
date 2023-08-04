'use client'
import Link from "next/link"
import { useEffect } from 'react'
import { Footer } from "react-day-picker"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <>
            <main className="my-24 flex flex-col gap-8 justify-center items-center font-text">
                <h1 className="text-6xl">Oops!</h1>
                <p>Etwas ging schief...</p>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="daisy_btn bg-black text-white box-shadow tracking-wider hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                    Versuche nochmal!
                </button>
                <p>Oder gehe zu <Link href="/">Home</Link></p>
            </main>
            <Footer />
        </>
    )

}