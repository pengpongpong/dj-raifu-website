"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { InstagramData } from "@/app/dashboard/instagram/page";


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const InstagramVideo = ({ list }: { list: InstagramData[] }) => {

    const videos = list?.map(obj => {
        return (
            <ReactPlayer url={obj.media_url} key={obj.id} width={"100%"} height={400} controls />
        )
    })

    return (
        <div>
            {videos}
        </div>
    )
}

export default InstagramVideo