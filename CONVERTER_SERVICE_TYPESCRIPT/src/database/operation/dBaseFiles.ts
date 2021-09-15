import { File } from "../model/file";
const FileSchema = require("../model/fileSchema");

export class DBaseFiles {
    static async files(): Promise<File> {
        const file: File = await FileSchema.find().lean().exec();
        return file;
    }
}
