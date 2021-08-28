"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class JsonResponse {
    response(result, algorithm, searchWord, secondsToString, image, response, pathImage) {
        if (result[0] !== undefined) {
            const objectResult = result[0];
            const objectResponse = {
                Algorithm: algorithm,
                Word: objectResult.className,
                Percentage: objectResult.probability,
                Second: secondsToString.parse(path_1.default.parse(image.originalname).name),
                PathImage: pathImage + image.filename
            };
            response.push(objectResponse);
        }
        return response;
    }
}
exports.default = JsonResponse;
