import { Upload } from "./upload";
import formidable = require('formidable');
import { Md5File } from '../../../utilities/checksum';
import { FileUtil } from '../../../utilities/fileUtil';
import { VerifyChecksum } from "../../../database/operation/verifyChecksum";
import { InsertFile } from "../../../database/operation/insertFile";
const uploadPath = process.env.UPLOAD_PATH;

export class UploadVerifyFile extends Upload {    
    async uploadFile(req: any, res: any, next: any): Promise<any>{
        const form = formidable({ multiples: true });

        const result: any = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                resolve({ ...fields, files });
            });
        });

        req.fields = result;
        const hash = Md5File.getMD5File(result.files.file.path);
        const resulthash = hash;
        if (result.checksum === resulthash) {
            let objectFile = await VerifyChecksum.verifyChecksum(result.checksum);
            if (objectFile) {
                req.fields.uploadpath = objectFile.path;
                req.fields.filename = objectFile.name;
                next();
            } else {
                req.fields.uploadpath = uploadPath + result.files.file.name;
                req.fields.filename = result.files.file.name;
                await FileUtil.copyFile(result.files.file.path, uploadPath, result.files.file.name);
                await InsertFile.insert(result.files.file.name, uploadPath + result.files.file.name, result.checksum);
                next();
            }
        } else {
            res.send([
                { message: "Invalid checksum, corrupt file" }
            ]);
        }
    };
}