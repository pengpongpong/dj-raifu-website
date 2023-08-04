"use client"
import React from 'react'

import { useLiveQuery } from "@sanity/preview-kit"

import { aboutMeQuery } from "@/sanity/lib/query"
import Contact from "./Contact"


const ContactPreview = () => {
    const [data] = useLiveQuery(null, aboutMeQuery)

    return (
        <Contact  />
    )
}

export default ContactPreview