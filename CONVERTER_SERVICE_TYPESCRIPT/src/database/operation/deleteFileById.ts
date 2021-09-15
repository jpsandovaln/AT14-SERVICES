import { File } from "../model/file";
const FileSchema = require("../model/fileSchema");

export class DeleteFileById {
    static async delete(id: string): Promise<File> {
        const file: File = await FileSchema.deleteOne({ _id: id });
        return file;
    }
}
