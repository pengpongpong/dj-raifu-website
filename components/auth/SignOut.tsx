"use client"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import React, { useState } from 'react'



const SignOut = () => {
    const [message, setMessage] = useState<string>("")

    // logout
    const handleLogout = () => {
        signOut()
    }

    // refresh Instragram token
    const refreshToken = () => {
        const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
        const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`

        fetch(url, { method: "GET" })
            .then(res => res.json())
            .then(result => {
                if (result.expires_in) {
                    const time = (((result.expires_in / 60) / 60) / 24).toFixed(0)
                    setMessage(`Token läuft ab in: ${time} Tagen`)
                } else {
                    setMessage("Token konnte leider nicht refreshed werden")
                }
            })
    }

    return (
        <section className="flex flex-col gap-8 font-text w-full">
            <button className="daisy_btn daisy_btn-warning box-shadow" onClick={refreshToken}>Refresh Instagram token</button>
            {message ? <p className="text-center">{message}</p> : ""}
            <button className="daisy_btn daisy_btn-warning box-shadow" onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default SignOut