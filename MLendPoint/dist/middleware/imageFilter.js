"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../../public/images");
    },
    filename: function (req, file, cb) {
        const extension = path_1.default.extname(file.originalname);
        const name = Date.now() +
            path_1.default.basename(file.originalname, extension) +
            path_1.default.extname(file.originalname);
        cb(null, name);
    }
});
const upload = multer_1.default({
    storage: storage
});
exports.default = upload;
