"use client"
import React from 'react'
import Link from "next/link"


const SignIn = ({ callbackUrl }: { callbackUrl: string }) => {
    return (
        <main className="font-text">
            <h1 className="text-4xl text-center">Nicht eingeloggt!</h1>
            <Link className="daisy_btn daisy_btn-primary" href={callbackUrl}>Login</Link>
        </main>
    )
}

export default SignIn