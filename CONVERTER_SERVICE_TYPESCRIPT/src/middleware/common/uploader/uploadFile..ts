import { Upload } from "./upload";
import formidable = require('formidable');
import { FileUtil } from '../../../utilities/fileUtil';
import { InsertFile } from "../../../database/operation/insertFile";
const uploadPath = process.env.UPLOAD_PATH;

export class UploadFile extends Upload {
    async uploadFile(req: any, res: any, next: any): Promise<any>{
        const form = formidable({ multiples: true });

        const result: any = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                resolve({ ...fields, files });
            });
        });

        req.fields.uploadpath = uploadPath + result.files.file.name;
        req.fields.filename = result.files.file.name;
        await FileUtil.copyFile(result.files.file.path, uploadPath, result.files.file.name);
        await InsertFile.insert(result.files.file.name, uploadPath + result.files.file.name, result.checksum);
        next();
    };
}