import { ReactNode, lazy } from "react";

import Navbar from "@/components/navbar/Navbar";

import { cachedClient } from "@/sanity/lib/client";
import { cookieQuery, navQuery } from "@/sanity/lib/query";

const Footer = lazy(() => import("@/components/footer/Footer"))

const CookieBanner = lazy(() => import("@/components/cookie-banner/CookieBanner"))
const CookieModal = lazy(() => import("@/components/cookie-banner/CookieModal"))

export default async function AboutMeLayout({ children }: { children: ReactNode }) {
    const navData = await cachedClient(navQuery)
    const cookieData = await cachedClient(cookieQuery)

    return (
        <>
            <Navbar navData={navData} />
            {children}
            <Footer />
            <CookieBanner data={cookieData} />
            <CookieModal data={cookieData?.modal} />
        </>
    )
}