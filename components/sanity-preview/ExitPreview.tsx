"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"


const ExitPreview = () => {
    const pathname = usePathname()

    return (
        <Link className="daisy_btn bg-white text-black fixed bottom-0 right-0 hover:bg-white" href={`/api/exit-preview?page=${pathname}`}>Verlasse Vorschau</Link>
    )
}

export default ExitPreview