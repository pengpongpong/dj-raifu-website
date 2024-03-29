import { sesKey, sesUrl } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const bodyData = await req.json()
    const { data, date }: {
        data: {
            name: string,
            select: string,
            email?: string,
            call?: string,
            message?: string,
        }, date: Date
    } = bodyData

    // check for data and date
    if (!date && !data) return NextResponse.json({ message: "Required fields missing" }, { status: 400 })

    if (!sesKey || !sesUrl) return NextResponse.json({ message: "error" }, { status: 400 })

    const responseMessage = await fetch(sesUrl, {
        method: "POST",
        body: JSON.stringify({ data, date }),
        headers: {
            "x-api-key": sesKey
        }
    })
        .then(res => res.json())
        .then(result => {
            const { message } = JSON.parse(result.body)

            return message;
        })

    return NextResponse.json({ message: responseMessage }, { status: 200 })
}