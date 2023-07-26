"use client"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import React from 'react'



const SignOut = ({ session }: { session: Session }) => {

    const handleLogout = () => {
        signOut()
    }

    return (
        <main className="font-text">
            <p>Benutzer: {session?.user?.name}</p>
            <button className="daisy_btn daisy_btn-warning" onClick={handleLogout}>Logout</button>
        </main>
    )
}

export default SignOut