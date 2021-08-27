"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildArrayImages = /** @class */ (function () {
    function BuildArrayImages() {
    }
    BuildArrayImages.prototype.buildArrayImages = function (imagePaths, unzipOutput) {
        var files = [];
        for (var index = 0; index < imagePaths.length; index++) {
            var element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + imagePaths[index]
            };
            files.push(element);
        }
        return files;
    };
    return BuildArrayImages;
}());
exports.default = BuildArrayImages;
//# sourceMappingURL=buildArrayImages.js.map