import { IUpload } from "./upload.interface";
import { UploadConfig } from "../config/upload.config";
import multer from "multer";
import util from "util";
export class Upload extends UploadConfig implements IUpload {
    storage = multer.diskStorage({
        destination: (
            req: Express.Request,
            file: Express.Multer.File,
            cb: (error: Error | null, destination: string) => void
        ) => {
            cb(null, this.mainPath + "public/uploads");
        },
        filename: (
            req: Express.Request,
            file: Express.Multer.File,
            cb: (error: Error | null, filename: string) => void
        ) => {
            console.log(file.originalname);
            cb(null, file.originalname);
        },
    });

    upload = multer({
        storage: this.storage,
        limits: { fileSize: this.maxSize },
        fileFilter: (
            req: Express.Request,
            file: Express.Multer.File,
            cb: any
        ) => {
            if (
                file.mimetype == "image/png" ||
                file.mimetype == "image/jpg" ||
                file.mimetype == "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error("File types allowed .jpeg, .jpg and .png"));
            }
        },
    }).single("file");

    fileUploadMiddleware = util.promisify(this.upload);
}
