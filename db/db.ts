import mongoose from "mongoose"

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("No MONGODB_URI defined")
}

export async function connectToDatabase(): Promise<void> {
    try {
        await mongoose.connect(MONGODB_URI as string, {
            dbName: "DJRaifu"
        })
        console.log("connected to db")
    } catch (error) {
        throw new Error(`Could not connect to database: ${error}`)
    }
}

export const db = mongoose.connection