"use client"
import React from 'react'

import Navbar, { NavbarProps } from "./Navbar"

import { navQuery } from "@/sanity/lib/query"
import { useLiveQuery } from "@sanity/preview-kit"


const NavbarPreview = ({ navData }: { navData: NavbarProps }) => {
    const [data] = useLiveQuery(navData, navQuery)

    return (
        <Navbar navData={data} />
    )
}

export default NavbarPreview