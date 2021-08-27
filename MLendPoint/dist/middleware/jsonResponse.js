"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var JsonResponse = /** @class */ (function () {
    function JsonResponse() {
    }
    JsonResponse.prototype.response = function (result, algorithm, searchWord, secondsToString, image, response, pathImage) {
        if (result[0] !== undefined) {
            var objectResult = result[0];
            var objectResponse = {
                Algorithm: algorithm,
                Word: objectResult.className,
                Percentage: objectResult.probability,
                Second: secondsToString.parse(path_1.default.parse(image.originalname).name),
                PathImage: pathImage + image.filename
            };
            response.push(objectResponse);
        }
        return response;
    };
    return JsonResponse;
}());
exports.default = JsonResponse;
//# sourceMappingURL=jsonResponse.js.map