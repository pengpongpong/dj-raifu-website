"use client"
import { setAnalytic, setConsent, setFunctional, setOpen, setShowBanner, useConsentStore } from "@/utils/store/store"
import React, { useEffect } from 'react'
import { CookieIcon } from "./CookieModal"
import Link from "next/link"

import { getCookie, setCookie } from "cookies-next";

interface CookieBannerProps {
    text: string;
    iconText: string;
    acceptButton: string;
    modalButton: string;
    modal: Modal
}

export interface Modal {
    title: string;
    requiredText: string;
    requiredHead: string;
    functionalText: string;
    functionalHead: string;
    analyticsText: string;
    analyticsHead: string;
    denyButton: string;
    userSettingsButton: string;
    acceptButton: string;
}

export const ShowCookieModal = ({ text, styles }: { text: string, styles: string }) => {
    // open cookie settings modal
    const handleModal = () => {
        setOpen(true)
    }

    return <button className={styles} onClick={handleModal}>{text}</button>
}

const CookieBanner = ({ data }: { data: CookieBannerProps }) => {
    const consentCookie = getCookie("cookie-consent")
    const showBanner = useConsentStore(state => state.showBanner)

    // show cookie banner if no cookie consent 
    useEffect(() => {
        if (!consentCookie) {
            setShowBanner(true)
        }
    }, [consentCookie])

    // accept all cookies
    const handleAcceptAll = () => {
        setShowBanner(false)
        setCookie("cookie-consent", "true")
        setCookie("cookie-functional", "true")
        setCookie("cookie-analytics", "true")

        setConsent(true)
        setFunctional(true)
        setAnalytic(true)
    }

    return (
        <>
            {showBanner ? <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center daisy_alert bg-black text-white border border-white fixed bottom-0 left-0 right-0 font-text z-10">
                <Link className="flex gap-2" href="/datenschutz" title="Gehe zu Datenschutz" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-6 h-6 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {data?.iconText}
                </Link >
                <span className="flex gap-2"><CookieIcon />{data?.text}</span>
                <div className="flex gap-4">
                    <ShowCookieModal text={data?.modalButton} styles="daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out"/>
                    <button className="daisy_btn tracking-wide border-black text-white box-shadow hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={handleAcceptAll}>{data?.acceptButton}</button>
                </div>
            </div > : ""}
        </>
    )
}

export default CookieBanner