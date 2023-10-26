"use client"

import { useMemo } from "react";

const Spotify = ({ list = [] }: { list: string[] }) => {
    const items = useMemo(() => {
        return list?.map((link) => (
            <li key={link}>
                <iframe style={{ borderRadius: "12px" }}
                    src={link}
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </li>
        ))
    }, [list])

    return (
        <>
            <section className="mb-8 max-w-[1500px] mx-auto">
                <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 flex-wrap">
                    {items}
                </ul>
            </section>
            <hr className="py-4 md:mt-8 md:mx-4 lg:mx-32 lg:mt-12 lg:mb-6 xl:mx-36 3xl:mx-72" />
        </>
    )
}

export default Spotify;