"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ObtainDirectory {
    filesList(path) {
        return fs_1.default.readdirSync(path);
    }
}
exports.default = ObtainDirectory;
