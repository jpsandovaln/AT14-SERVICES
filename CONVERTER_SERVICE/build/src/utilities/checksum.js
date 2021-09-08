"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Md5File = void 0;
const md5_file_1 = __importDefault(require("md5-file"));
class Md5File {
    static getMD5File(filePath) {
        const hash = md5_file_1.default.sync(filePath);
        return hash;
    }
}
exports.Md5File = Md5File;
