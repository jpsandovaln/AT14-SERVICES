"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuildArrayImages {
    buildArrayImages(imagePaths, unzipOutput, filename) {
        const files = [];
        for (let index = 0; index < imagePaths.length; index++) {
            const element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + filename + "/" + imagePaths[index]
            };
            files.push(element);
        }
        return files;
    }
}
exports.default = BuildArrayImages;
