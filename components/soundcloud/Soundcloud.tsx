"use client"
import React, { useMemo } from 'react'
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/soundcloud"), { ssr: false });

const Soundcloud = ({ list }: { list: string[] }) => {

    const ReactPlayerContainer = ({ url }: { url: string }) => {
        return (
            <div className="box-shadow rounded-lg border border-white overflow-hidden max-w-[400px] h-[250px] md:max-w-[450px] md:h-[350px] lg:max-w-[500px] lg:h-[350px]">
                <ReactPlayer width={"100%"} height={"100%"} url={url} />
            </div>
        )
    }

    const items = useMemo(() => {
        return list?.map(item => (
            <li key={item} >
                <ReactPlayerContainer url={item} />
            </li>
        ))
    }, [list])

    return (
        <div className="mb-8 max-w-[1500px] mx-auto">
            <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 flex-wrap">
                {items}
            </ul>
        </div>
    )
}


export default Soundcloud