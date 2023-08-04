import { ReactNode, lazy } from "react";

import Navbar from "@/components/navbar/Navbar";

import { cachedClient } from "@/sanity/lib/client";
import { navQuery } from "@/sanity/lib/query";

const Footer = lazy(() => import("@/components/footer/Footer"))

export default async function ContactLayout({ children }: { children: ReactNode }) {
    const navData = await cachedClient(navQuery)

    return (
        <>
            <Navbar navData={navData}/>
            {children}
            <Footer />
        </>
    )
}