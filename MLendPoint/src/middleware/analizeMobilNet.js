const MobilNet = require("../controllers/MobilNet");
const path = require("path");
const analize = require("./analize");
const JsonResponse = require("./jsonResponse");

class analizeMobilNet extends analize {
    constructor(
        imagePaths,
        searchWord,
        percentage,
        secondsToString,
        algorithm
    ) {
        super(imagePaths, searchWord, percentage, secondsToString, algorithm);
    }
    async recognition() {
        let response = [];
        for (const image of this.imagePaths) {
            const machineLearning = new MobilNet(
                image.path,
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
module.exports = analizeMobilNet;
