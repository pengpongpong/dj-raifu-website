import { NextRequest } from "next/server";
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams
    const page = params.get("page")
    let redirectUrl: string = "/";

    // set url for redirect
    switch (page) {
        case "/":
            redirectUrl = "/"
            break;
        case "/ueber-mich":
            redirectUrl = "/ueber-mich"
            break;
        case "/kontakt":
            redirectUrl = "/kontakt"
            break;
        case "/datenschutz":
            redirectUrl = "/datenschutz"
            break;
    }

    draftMode().disable() //exit preview mode 
    redirect(redirectUrl)
}