"use client"
import React from 'react'
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/soundcloud"), { ssr: false });

const Soundcloud = ({ list }: { list: string[] }) => {

    const ReactPlayerContainer = ({ url }: { url: string }) => {
        return (
            <div className="box-shadow rounded-lg border border-white overflow-hidden max-w-[400px] h-[250px] lg:max-w-[500px] lg:h-[350px]">
                <ReactPlayer width={"100%"} height={"100%"} url={url}  />
            </div>
        )
    }

    return (
        <section className="mb-8 flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {list?.map(item => <ReactPlayerContainer url={item} key={item} />)}
        </section>
    )
}


export default Soundcloud