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
exports.ImageToText = void 0;
const tesseract_js_1 = require("tesseract.js");
const worker = tesseract_js_1.createWorker();
class ImageToText {
    constructor(language, imagePath) {
        this.initializeExtractor = () => __awaiter(this, void 0, void 0, function* () {
            yield worker.load();
            yield worker.loadLanguage(this.language);
            yield worker.initialize(this.language);
        });
        this.extractText = () => __awaiter(this, void 0, void 0, function* () {
            const { data: { text }, } = yield worker.recognize(this.imagePath);
            this.text = text;
        });
        this.language = language;
        this.imagePath = imagePath;
        this.text = "";
    }
    getText() {
        return this.text;
    }
}
exports.ImageToText = ImageToText;
