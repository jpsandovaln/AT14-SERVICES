import { Upload } from "./upload";
import formidable = require('formidable');
import { FileUtil } from '../../../utilities/fileUtil';
import { Property } from "../../../utilities/property";
import path = require('path');
export class UploadFile extends Upload {
    async uploadFile(req: any, res: any, next: any): Promise<any>{
        const form = formidable({ multiples: true });

        const result: any = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                resolve({ ...fields, files }); 
            });
        });
        const resultName = Date.now().toString() + path.extname(result.files.file.name);
        req.fields = result;
        req.fields.uploadpath = Property.getUploadPath() + resultName;
        req.fields.filename = resultName;
        await FileUtil.copyFile(result.files.file.path, Property.getUploadPath(), resultName);        
        next();
    };
}

