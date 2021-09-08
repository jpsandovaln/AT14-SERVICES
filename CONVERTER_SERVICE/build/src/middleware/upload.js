"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const upload_config_1 = require("../config/upload.config");
const multer_1 = __importDefault(require("multer"));
const util_1 = __importDefault(require("util"));
class Upload extends upload_config_1.UploadConfig {
    constructor() {
        super(...arguments);
        this.storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.mainPath + "public/uploads");
            },
            filename: (req, file, cb) => {
                console.log(file.originalname);
                cb(null, file.originalname);
            },
        });
        this.upload = multer_1.default({
            storage: this.storage,
            limits: { fileSize: this.maxSize },
            fileFilter: (req, file, cb) => {
                if (file.mimetype == "image/png" ||
                    file.mimetype == "image/jpg" ||
                    file.mimetype == "image/jpeg") {
                    cb(null, true);
                }
                else {
                    cb(null, false);
                    return cb(new Error("File types allowed .jpeg, .jpg and .png"));
                }
            },
        }).single("file");
        this.fileUploadMiddleware = util_1.default.promisify(this.upload);
    }
}
exports.Upload = Upload;
