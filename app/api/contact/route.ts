import { awsAccessKey, awsSecretKey } from "@/env";
import { NextRequest, NextResponse } from "next/server";

const aws = require("@aws-sdk/client-ses")
const nodemailer = require("nodemailer");

// get AWS SES provider
const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "eu-central-1",
    credentials: { awsAccessKey, awsSecretKey }
});

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
    SES: { ses, aws },
});

export const POST = async (req: NextRequest) => {
    const bodyData = await req.json()
    const { data, date }: { data: any, date: any } = bodyData

    // check if right email/phone number format
    if (!date && !data) return NextResponse.json({ message: "Ungültige Daten" }, { status: 400 })

    // mail template to send
    const mailHtml = `
    <!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="de">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <h1>Kontaktanfrage</h1>

            <p>Name: ${data.name}</p>
            <p>Kontaktform: ${data.select === "email" ? "Email" : "Anruf"}</p>
            <p>Email: ${!data.email ? "-" : data.email}</p>
            <p>Tel.: ${!data.call ? "-" : data.call}</p>
            <p>Event Datum: ${date}</p>
            <p>Nachricht: ${data?.message}</p>
        </body>
    </html>
    `

    // mail header
    const mailData = {
        from: process.env.NEXT_PUBLIC_EMAIL_FROM,
        to: process.env.NEXT_PUBLIC_EMAIL_FROM,
        subject: `Kontaktanfrage | ${data.name}`,
        html: mailHtml,
    }

    // send mail to subscriber
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err: any, info: any) => {
            if (err) {
                reject(err);
                return NextResponse.json({ message: "Konnte Email nicht senden. Bitte wiederholen!", error: err }, { status: 500 })
            } else {
                resolve(info);
            }
        });
    });

    return NextResponse.json({ message: "Erfolgreich übermittelt!" }, { status: 201 })
}