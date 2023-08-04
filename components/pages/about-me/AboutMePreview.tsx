"use client"
import React from 'react'

import { useLiveQuery } from "@sanity/preview-kit"
import AboutMe, { AboutMeProps } from "./AboutMe"
import { aboutMeQuery } from "@/sanity/lib/query"


const AboutMePreview = ({ pageData }: { pageData: AboutMeProps }) => {
    const [data] = useLiveQuery(pageData, aboutMeQuery)

    return (
        <AboutMe pageData={data} />
    )
}

export default AboutMePreview