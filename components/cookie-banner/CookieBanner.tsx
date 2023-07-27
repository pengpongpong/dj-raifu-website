"use client"
import { useConsentStore } from "@/utils/store/store"
import React from 'react'
import CookieModal from "./CookieModal"
import Link from "next/link"

const CookieBanner = () => {

    const setOpen = (open: boolean) => {
        useConsentStore.getState().setOpen(open)
    }

    return (
        <div className="flex daisy_alert bg-white text-black fixed bottom-0 left-0 right-0 font-text">
            <Link href="/datenschutz" title="Gehe zu Datenschutz">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral shrink-0 w-6 h-6 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </Link>
            <span>
                we use cookies for no reason.
            </span>
            <div>
                <button className="daisy_btn daisy_btn-sm bg-black text-white box-shadow" onClick={() => setOpen(true)}>open</button>
                <CookieModal />
            </div>
        </div >
    )
}

export default CookieBanner