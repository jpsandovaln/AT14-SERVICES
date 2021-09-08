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
exports.fetching = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
function returnMetadata(executablePathMetadata, filePath, nameFile, outputPath) {
    const SPACE = " ";
    const ARROW = " > ";
    const command = executablePathMetadata +
        SPACE +
        filePath +
        ARROW +
        outputPath +
        path_1.default.parse(nameFile).name +
        ".txt";
    return command;
}
function execute(command) {
    return new Promise(function (resolve, reject) {
        child_process_1.exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve({ stdout });
        });
    });
}
function fetching(executablePathMetadata, filePath, nameFile, outputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield execute(returnMetadata(executablePathMetadata, filePath, nameFile, outputPath));
        return outputPath + path_1.default.parse(nameFile).name + ".txt";
    });
}
exports.fetching = fetching;
