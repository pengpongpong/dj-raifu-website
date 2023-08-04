"use client"
import React from 'react'

import { useLiveQuery } from "@sanity/preview-kit"
import PrivacyPolicy, { PrivacyPolicyProps } from "./PrivacyPolicy"
import { privacyPolicyQuery } from "@/sanity/lib/query"


const PrivacyPolicyPreview = ({ pageData }: { pageData: PrivacyPolicyProps }) => {
    const [data] = useLiveQuery(pageData, privacyPolicyQuery)

    return (
        <PrivacyPolicy pageData={data} />
    )
}

export default PrivacyPolicyPreview