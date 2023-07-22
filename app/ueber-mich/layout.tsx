import { ReactNode, lazy } from "react";
import Navbar from "@/components/navbar/Navbar";

const Footer = lazy(() => import("@/components/footer/Footer"))

export default function AboutMeLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}