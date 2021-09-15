import { File } from "../model/file";
const FileSchema = require("../model/fileSchema");

export class VerifyId {
    static async verifyId(id: string): Promise<File> {
        const file: File = await FileSchema.findOne({ _id: id });
        return file;
    }
}
