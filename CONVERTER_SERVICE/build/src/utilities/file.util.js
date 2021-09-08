"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtil = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileUtil {
    static copyFile(file, destFolder, newName) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = fs_1.default.createReadStream(file);
            const dest = fs_1.default.createWriteStream(path_1.default.resolve(destFolder, newName));
            yield new Promise((resolve, rejects) => {
                source.pipe(dest);
                source.on("end", () => {
                    resolve();
                });
                source.on("error", (err) => {
                    rejects();
                });
            });
        });
    }
}
exports.FileUtil = FileUtil;
