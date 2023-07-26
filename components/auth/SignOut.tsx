"use client"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import React from 'react'



const SignOut = ({ session }: { session: Session }) => {

    const handleLogout = () => {
        signOut()
    }

    return (
        <section className="flex flex-col gap-8 font-text w-full">
            <button className="daisy_btn daisy_btn-warning box-shadow" onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default SignOut