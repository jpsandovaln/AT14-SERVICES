import mongoose from "mongoose";
export interface File extends mongoose.Document {
    name: String,
    path: String,
    checksum: String
}