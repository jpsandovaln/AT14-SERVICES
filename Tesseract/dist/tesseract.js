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
Object.defineProperty(exports, "__esModule", { value: true });
const tesseract_js_1 = require("tesseract.js");
const worker = tesseract_js_1.createWorker();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield worker.load();
    yield worker.loadLanguage("eng");
    yield worker.initialize("eng");
    const { data: { text }, } = yield worker.recognize("https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8");
    console.log(text);
    yield worker.terminate();
}))();
