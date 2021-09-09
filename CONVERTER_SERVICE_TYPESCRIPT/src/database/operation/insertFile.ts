import { File } from '../model/file'
const FileSchema = require("../model/fileSchema");

export class InsertFile{
    
    static async insert(name: string, path: string, checksum: string): Promise<void> {
        const file: File = new FileSchema({name, path, checksum}); 
        await file.save();      
    }
}
 