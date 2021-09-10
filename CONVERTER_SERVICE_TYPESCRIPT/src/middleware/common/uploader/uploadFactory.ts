import { Upload } from "./upload";
import { UploadFile } from "./uploadFile.";
import { UploadVerifyFile } from "./uploadVerifyFile";

export class UploadFactory {
    public static getInstance(uploadType :string): Upload {
        if (uploadType == 'true') {
            return new UploadVerifyFile();
        }
        else{
            return new UploadFile();
        }    
    }
}
