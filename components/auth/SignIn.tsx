"use client"
import React from 'react'
import Link from "next/link"


const SignIn = ({ callbackUrl }: { callbackUrl: string }) => {
    return (
        <section className="w-full flex flex-col gap-8 font-text">
            <Link className="daisy_btn daisy_btn-primary box-shadow" href={callbackUrl}>Login</Link>
        </section>
    )
}

export default SignIn