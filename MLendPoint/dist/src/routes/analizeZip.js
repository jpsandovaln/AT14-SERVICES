"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = require("express");
const path = __importStar(require("path"));
const imageFilter_1 = __importDefault(require("../middleware/imageFilter"));
const obtainDirectory_1 = __importDefault(require("../middleware/obtainDirectory"));
const unzip_1 = __importDefault(require("../middleware/unzip"));
const secondToString_1 = __importDefault(require("../middleware/secondToString"));
const analizeCocoSSD_1 = __importDefault(require("../middleware/analizeCocoSSD"));
const analizeMobilNet_1 = __importDefault(require("../middleware/analizeMobilNet"));
const buildArrayImages_1 = __importDefault(require("../middleware/buildArrayImages"));
class AnalizeZip {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            const json = {};
            res.json(json);
        });
        this.router.post("/", imageFilter_1.default.single("zipFile"), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            const searchWord = req.body.searchWord;
            const percentage = req.body.percentage;
            const zipNameFile = file === null || file === void 0 ? void 0 : file.filename;
            const pathFile = file === null || file === void 0 ? void 0 : file.path;
            const algorithm = req.body.algorithm;
            const extension = path.extname(file === null || file === void 0 ? void 0 : file.originalname);
            const fileName = path.basename(file === null || file === void 0 ? void 0 : file.originalname, extension);
            const pathImage = "http://localhost:8085/unZipFiles/" +
                path.parse(zipNameFile).name +
                "/";
            const obtainDirectory = new obtainDirectory_1.default();
            const buildArrayImages = new buildArrayImages_1.default();
            const unzip = new unzip_1.default();
            const secondsToString = new secondToString_1.default();
            const unzipOutput = __dirname +
                "/../../public/unZipFiles/" +
                path.parse(zipNameFile).name;
            unzip.extractZip(pathFile, unzipOutput);
            const zipPath = obtainDirectory.filesList(unzipOutput);
            const files = buildArrayImages.buildArrayImages(zipPath, unzipOutput);
            if (algorithm == "CocoSSD") {
                const learning = new analizeCocoSSD_1.default(files, searchWord, percentage, secondsToString, algorithm, pathImage);
                const response = yield learning.recognition();
                res.send(response);
            }
            if (algorithm == "MobilNet") {
                const learning = new analizeMobilNet_1.default(files, searchWord, percentage, secondsToString, algorithm, pathImage);
                const response = yield learning.recognition();
                res.send(response);
            }
        }));
    }
}
const analizeZip = new AnalizeZip();
analizeZip.routes();
exports.default = analizeZip.router;
