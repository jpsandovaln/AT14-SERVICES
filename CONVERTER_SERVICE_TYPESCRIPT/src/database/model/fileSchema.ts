import mongoose, { Schema, model } from 'mongoose'
import { File } from './file'

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
    },
    checksum: {
        type: String,
    },
});

const FileSchema = mongoose.model<File>("File", fileSchema );

module.exports = FileSchema;
