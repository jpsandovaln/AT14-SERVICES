"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FileSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
    },
    checksum: {
        type: String,
    },
});
const FileModel = mongoose_1.default.model("File", FileSchema);
exports.FileModel = FileModel;
