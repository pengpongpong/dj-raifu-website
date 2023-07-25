import UserModel from "@/db/UserModel";
import { connectToDatabase } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

const bcrypt = require("bcrypt")
const saltRounds = 14

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const { username, password } = data

    const hash = await bcrypt.hash(password, saltRounds)

    if (hash) {
        await connectToDatabase()

        const newUser = await UserModel.create({
            name: username,
            password: hash,
        })

        console.log(newUser)

        if (!newUser) return NextResponse.json({ message: "Could not save user" }, { status: 500 })
        return NextResponse.json({ message: "User successfully saved" }, { status: 201 })
    } else {
        return NextResponse.json({ message: "Could not hash password" }, { status: 500 })
    }
}