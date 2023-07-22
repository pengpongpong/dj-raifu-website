"use client"
import React, { Suspense } from 'react'
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/soundcloud"), { ssr: false });

const Soundcloud = () => {

    return (
        <div className="mb-8 flex flex-col gap-4">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="box-shadow rounded-lg border border-white overflow-hidden">
                    <ReactPlayer width={"100%"} height={250} url="https://soundcloud.com/djraifu/fireboy-dml-coming-back-for?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                </div>
                <div className="box-shadow rounded-lg border border-white overflow-hidden">
                    <ReactPlayer width={"100%"} height={250} url="https://soundcloud.com/djraifu/amapiano-b2b-mixtape-presented?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                </div>
            </Suspense>
        </div>
    )
}


export default Soundcloud