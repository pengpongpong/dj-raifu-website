import UserModel from "@/utils/db/UserModel"
import { connectToDatabase, db } from "@/utils/db/db"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const bcrypt = require("bcrypt")

const getUserData = async (credentials: Record<"username" | "password", string> | undefined) => {
    await connectToDatabase()
    const userData = await UserModel.find({ name: credentials?.username }).exec();
    db.on("open", () => {
        db.close()
    })

    return userData
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Login Daten",
            credentials: {
                username: { label: "Benutzername", type: "text", placeholder: "Benutzername" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const userData = await getUserData(credentials)
                const comparePassword: boolean = await bcrypt.compare(credentials?.password, userData[0].password);

                if (comparePassword) {
                    return { id: "1", name: userData[0].name }
                }
                return null
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }