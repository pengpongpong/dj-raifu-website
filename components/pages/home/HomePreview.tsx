"use client"
import React from 'react'
 
import Home, { HomeData } from "./Home"

import { useLiveQuery } from "@sanity/preview-kit"
import { homeQuery } from "@/sanity/lib/query"


const HomePreview = ({ pageData }: { pageData: HomeData}) => {
    const [data] = useLiveQuery(pageData, homeQuery)

    return (<Home data={data} />)
}

export default HomePreview