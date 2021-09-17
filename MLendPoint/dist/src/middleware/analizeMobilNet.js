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
const MobilNet_1 = __importDefault(require("../controllers/MobilNet"));
const analize_1 = __importDefault(require("./analize"));
const jsonResponse_1 = __importDefault(require("./jsonResponse"));
class analizeMobilNet extends analize_1.default {
    constructor(imagePaths, searchWord, percentage, secondsToString, algorithm, pathImage) {
        super(imagePaths, searchWord, percentage, secondsToString, algorithm, pathImage);
    }
    recognition() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = [];
            for (const image of this.imagePaths) {
                const machineLearning = new MobilNet_1.default(image.path, this.searchWord, this.percentage);
                const result = yield machineLearning.getJSON();
                const jsonResponse = new jsonResponse_1.default();
                response = jsonResponse.response(result, this.algorithm, this.searchWord, this.secondsToString, image, response, this.pathImage);
            }
            return response;
        });
    }
}
exports.default = analizeMobilNet;
