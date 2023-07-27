import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now() }
})

export default mongoose.models["DJRaifu-user"] || mongoose.model("DJRaifu-user", UserSchema)