import { File } from '../model/file'
const FileSchema = require("../model/fileSchema");

export class VerifyChecksum{
    
    static async verifyChecksum(checksumI: string): Promise<boolean> {
        const file: File = await FileSchema.findOne({checksum: checksumI});
        if(file){
            return true;
        }            
        else {
            return false;
        }            
    }
}
