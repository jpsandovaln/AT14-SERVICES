import multer from "multer";
import util from "util";
import dotenv from "dotenv";
import { FileUploadException } from "../common/exception/fileUploadException";
import { StatusCode } from "../common/statusCode";
import { Code } from "../common/code";

dotenv.config();

export class Upload {
    root: string | undefined = process.env.EXTRACTOR_ROOT;
    maxSize: number = 2 * 1024 * 1024;

    storage = multer.diskStorage({
        destination: (
            req: Express.Request,
            file: Express.Multer.File,
            cb: (error: Error | null, destination: string) => void
        ) => {
            cb(null, this.root + "public/uploads");
        },
        filename: (
            req: Express.Request,
            file: Express.Multer.File,
            cb: (error: Error | null, filename: string) => void
        ) => {
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
                return cb(new FileUploadException(
                    "File types allowed .jpeg, .jpg and .png",
                    StatusCode.BadRequest,
                    Code.EXTRACTOR_ERROR_01));
            }
        },
    }).single("file");

    fileUploadMiddleware = util.promisify(this.upload);
}
