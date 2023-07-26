import React from 'react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import SignOut from "@/components/auth/SignOut"
import SignIn from "@/components/auth/SignIn"
import Link from "next/link"

const Dashboard = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return (
            <main className="m-4 flex flex-col justify-center items-center gap-12 flex-grow">
                <Link href="/dashboard/instagram" className="w-full daisy_btn daisy_btn-outline box-shadow">Instagram Media</Link>
                <SignOut />
            </main>)
    }

    return (
        <main className="m-4 flex flex-col justify-center items-center gap-12 flex-grow">
            <h1 className="text-4xl text-center">Nicht eingeloggt!</h1>
            <SignIn callbackUrl={"/api/auth/signin?callbackUrl=/dashboard"} />
        </main>
    )
}

export default Dashboard