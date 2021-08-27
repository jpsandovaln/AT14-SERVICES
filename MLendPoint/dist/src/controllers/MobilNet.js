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
const mobilenet_1 = __importDefault(require("@tensorflow-models/mobilenet"));
const tfjs_node_1 = __importDefault(require("@tensorflow/tfjs-node"));
const MachineLearing_1 = __importDefault(require("./MachineLearing"));
const fs_1 = __importDefault(require("fs"));
/**
 * @Class
 * Build an instance from Machine Learning
 *
 */
class MobilNet extends MachineLearing_1.default {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */
    constructor(image, searchWord, percentage) {
        super(image, searchWord, percentage);
    }
    loadmodel() {
        return __awaiter(this, void 0, void 0, function* () {
            const image = fs_1.default.readFileSync(this.image);
            const tfimage = tfjs_node_1.default.node.decodeImage(image);
            const model = yield mobilenet_1.default.load();
            const predictions = yield model.classify(tfimage);
            return predictions;
        });
    }
    getJSON() {
        return __awaiter(this, void 0, void 0, function* () {
            let quantity = 0;
            this.predictions = yield this.loadmodel();
            const arr = [];
            this.predictions.forEach((element) => {
                const searchWord = new RegExp(this.searchWord, "i");
                if (element.className.search(searchWord) != -1 &&
                    element.probability >= this.percentage) {
                    quantity = quantity + 1;
                    arr.push(element);
                }
            });
            return this.parse(arr);
        });
    }
    //TODO fix any
    parse(arr) {
        const arrParse = [];
        arr.forEach((element) => {
            arrParse.push(element);
        });
        return arrParse;
    }
}
exports.default = MobilNet;
