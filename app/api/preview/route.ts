import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from "next/server"

// enter preview mode
export async function GET(request: NextRequest) {
    // preview home page
    draftMode().enable()
    redirect("/")
}