import { File } from '../model/file'
const FileSchema = require("../model/fileSchema");
export class VerifyChecksum{    
    static async verifyChecksum(checksumI: string): Promise<File> {
        const file: File = await FileSchema.findOne({checksum: checksumI});
        return file;          
    }
}
