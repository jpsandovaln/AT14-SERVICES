const CocoSSD = require("../controllers/CocoSSD");
const path = require("path");
const analize = require("./analize");
const JsonResponse = require("./jsonResponse");

class analizeCocoSSD extends analize {
    constructor(
        imagePaths,
        unzipOutput,
        zipPath,
        searchWord,
        percentage,
        secondsToString,
        algorithm
    ) {
        super(
            imagePaths,
            unzipOutput,
            zipPath,
            searchWord,
            percentage,
            secondsToString,
            algorithm
        );
    }
    async recognition() {
        let response = [];
        const SLASH = "/"
        for (const image of this.imagePaths) {
            const machineLearning = new CocoSSD(
                this.unzipOutput + SLASH + this.zipPath[0] + SLASH + image,
                this.searchWord,
                this.percentage
            );
            const result = await machineLearning.getJSON();
            const jsonResponse = new JsonResponse();

            response = jsonResponse.response(
                result,
                this.algorithm,
                this.searchWord,
                this.secondsToString,
                image,
                response
            );
        }
        return response;
    }
}
module.exports = analizeCocoSSD;
