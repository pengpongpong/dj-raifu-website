"use client"
import React, { ReactNode, Suspense } from 'react'
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/soundcloud"), { ssr: false });

const Soundcloud = () => {

    const ReactPlayerContainer = ({ children }: { children: ReactNode }) => {
        return (
            <div className="box-shadow rounded-lg border border-white overflow-hidden max-w-[400px] h-[250px] lg:max-w-[500px] lg:h-[350px]">
                {children}
            </div>
        )
    }

    return (
        <div className="mb-8 flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
            <Suspense fallback={<div>Loading...</div>}>
                <ReactPlayerContainer>
                    <ReactPlayer width={"100%"} height={"100%"} url="https://soundcloud.com/djraifu/fireboy-dml-coming-back-for?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                </ReactPlayerContainer>
                <ReactPlayerContainer>
                    <ReactPlayer width={"100%"} height={"100%"} url="https://soundcloud.com/djraifu/amapiano-b2b-mixtape-presented?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
                </ReactPlayerContainer>
            </Suspense>
        </div>
    )
}


export default Soundcloud