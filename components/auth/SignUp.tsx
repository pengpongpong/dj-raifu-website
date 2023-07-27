"use client"
import React, { useRef } from 'react'

const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        const username = usernameRef?.current?.value
        const password = passwordRef?.current?.value

        fetch("/api", { method: "POST", body: JSON.stringify({ username, password }) })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="daisy_input daisy_input-bordered" ref={usernameRef} />
            <input type="text" className="daisy_input daisy_input-bordered" ref={passwordRef} />

            <input type="submit" className="daisy_btn daisy_btn-outline" />
        </form>
    )
}

export default SignUp