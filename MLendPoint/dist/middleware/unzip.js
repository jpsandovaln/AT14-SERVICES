"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adm_zip_1 = __importDefault(require("adm-zip"));
class UnZip {
    extractZip(zipPath, outPath) {
        const zip = new adm_zip_1.default(zipPath);
        zip.extractAllTo(outPath, true);
    }
}
exports.default = UnZip;
