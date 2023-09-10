"use client"
import { setOpen, setShowBanner, useConsentStore } from "@/utils/store/store"
import React, { useEffect } from 'react'
import { CookieIcon, setCookies } from "./CookieModal"
import Link from "next/link"

import { getLocalStorage, setLocalStorage } from "@/utils/utils"

export interface CookieBannerProps {
    text: string;
    iconText: string;
    acceptButton: string;
    modalButton: string;
    modal: Modal
}

// CMS data
export interface Modal {
    title: string;
    requiredText: string;
    requiredHead: string;
    functionalText: string;
    functionalHead: string;
    analyticsText: string;
    analyticsHead: string;
    advertisementText: string;
    advertisementHead: string;
    denyButton: string;
    userSettingsButton: string;
    acceptButton: string;
}

type Consent = "granted" | "partial" | "denied" | null

// open cookie settings modal
export const ShowCookieModal = ({ text, styles }: { text: string, styles: string }) => {
    const handleModal = () => {
        setOpen(true)
    }

    return <button className={styles} onClick={handleModal}>{text}</button>
}


const CookieBanner = ({ data, main }: { data: CookieBannerProps, main?: boolean }) => {
    const showBanner = useConsentStore(state => state.showBanner)

    // show cookie banner if no cookie consent 
    useEffect(() => {
        const consent = getLocalStorage("consent") as Consent
        if ((consent === "granted") || (consent === "partial")  || (consent === "denied") ) {
            return
        }

        return setShowBanner(true)
    }, [])

    // accept all cookies
    const handleAcceptAll = () => {
        setShowBanner(false)

        setLocalStorage("consent", "granted")

        // set functional, analytics and advertisement cookie 
        setCookies(true, true, true)
    }

    return (
        <>
            {showBanner ? <div className={`${main ? "invisible opacity-0 animate-[showVisibility_1s_3s_ease-in-out_forwards]" : ""} flex flex-col lg:flex-row lg:justify-between lg:items-center daisy_alert bg-black text-white border border-white fixed bottom-0 left-0 right-0 font-text z-10`}>
                <Link className="flex gap-2" href="/datenschutz" title="Gehe zu Datenschutz" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-6 h-6 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {data?.iconText}
                </Link >
                <span className="flex gap-2"><CookieIcon />{data?.text}</span>
                <div className="flex gap-4">
                    <ShowCookieModal text={data?.modalButton} styles="daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" />
                    <button className="daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={handleAcceptAll}>{data?.acceptButton}</button>
                </div>
            </div > : ""}
        </>
    )
}

export default CookieBanner