"use client"
import React, { useEffect } from 'react'

import { getCookie } from "cookies-next"
import { useConsentStore } from "@/utils/store/store"

import { GoogleAnalytics, consent } from "nextjs-google-analytics"

const GoogleAnalytic = () => {
    const analytic = useConsentStore(state => state.analytic)
    const advertisement = useConsentStore(state => state.advertisement)

    useEffect(() => {
        const analyticsCookie = getCookie("cookie-analytics")
        const advertisementCookie = getCookie("cookie-advertisement")

        consent({
            arg: 'update',
            params: {
                ad_storage: advertisementCookie ? 'granted' : 'denied',
                analytics_storage: analyticsCookie ? 'granted' : 'denied',
            },
        })

    }, [analytic, advertisement])



    return (<GoogleAnalytics trackPageViews defaultConsent="denied"/>)
}

export default GoogleAnalytic