"use client"
import React from 'react'

import { useLiveQuery } from "@sanity/preview-kit"
import { contactQuery } from "@/sanity/lib/query"

import Contact, { ContactProps } from "./Contact"


const ContactPreview = ({ pageData }: { pageData: ContactProps }) => {
    const [data] = useLiveQuery(pageData, contactQuery)

    return (<Contact pageData={data} />)
}

export default ContactPreview