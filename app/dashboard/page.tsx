import React from 'react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import SignOut from "@/components/auth/SignOut"
import SignIn from "@/components/auth/SignIn"

const Dashboard = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return <SignOut session={session} />
    }

    return (
        <div>
            <SignIn callbackUrl={"/api/auth/signin?callbackUrl=/dashboard"} />
        </div>
    )
}

export default Dashboard