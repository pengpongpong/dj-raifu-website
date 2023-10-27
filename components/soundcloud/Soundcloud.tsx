"use client"
import React, { useMemo } from 'react'
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/soundcloud"), { ssr: false });

const Soundcloud = ({ list }: { list: string[] }) => {

    const ReactPlayerContainer = ({ url }: { url: string }) => {
        return (
            <div className="box-shadow rounded-lg border border-white overflow-hidden w-full h-[250px] md:max-w-[450px] md:h-[350px] lg:max-w-[500px] lg:h-[350px]">
                <ReactPlayer width={"100%"} height={"100%"} url={url} />
            </div>
        )
    }

    const items = useMemo(() => {
        return list?.map(item => (
            <li key={item} className="w-full h-auto max-w-[410px] md:w-[300px]"  >
                <ReactPlayerContainer url={item} />
            </li>
        ))
    }, [list])

    return (
        <section className="mb-8 max-w-[1600px] mx-auto flex justify-center items-center">
            <ul className="w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:max-w-[1300px] justify-center items-center md:flex-wrap">
                {items}
            </ul>
        </section>
    )
}


export default Soundcloud