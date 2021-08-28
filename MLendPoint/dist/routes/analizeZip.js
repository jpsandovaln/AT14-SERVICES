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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageFilter_1 = __importDefault(require("../middleware/imageFilter"));
const obtainDirectory_1 = __importDefault(require("../middleware/obtainDirectory"));
const unzip_1 = __importDefault(require("../middleware/unzip"));
const secondToString_1 = __importDefault(require("../middleware/secondToString"));
const analizeCocoSSD_1 = __importDefault(require("../middleware/analizeCocoSSD"));
const analizeMobilNet_1 = __importDefault(require("../middleware/analizeMobilNet"));
const buildArrayImages_1 = __importDefault(require("../middleware/buildArrayImages"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    const json = {};
    res.json(json);
});
router.post("/", imageFilter_1.default.single("zipFile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const zipNameFile = file.filename;
    const pathFile = file.path;
    const algorithm = req.body.algorithm;
    const extension = path_1.default.extname(file.originalname);
    const fileName = path_1.default.basename(file.originalname, extension);
    const pathImage = "http://localhost:8080/unZipFiles/" +
        path_1.default.parse(zipNameFile).name +
        "/" +
        fileName +
        "/";
    const obtainDirectory = new obtainDirectory_1.default();
    const buildArrayImages = new buildArrayImages_1.default();
    const unzip = new unzip_1.default();
    const secondsToString = new secondToString_1.default();
    const unzipOutput = __dirname + "/../../public/unZipFiles/" + path_1.default.parse(zipNameFile).name;
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
exports.default = router;
