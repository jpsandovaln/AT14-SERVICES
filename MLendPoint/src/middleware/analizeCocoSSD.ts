import CocoSSD from "../controllers/CocoSSD";
import analize from "./analize";
import JsonResponse from "./jsonResponse";

class analizeCocoSSD extends analize {
    constructor(
        imagePaths,
        searchWord,
        percentage,
        secondsToString,
        algorithm,
        pathImage
    ) {
        super(
            imagePaths,
            searchWord,
            percentage,
            secondsToString,
            algorithm,
            pathImage
        );
    }
    async recognition() {
        let response = [];
        for (const image of this.imagePaths) {
            const machineLearning = new CocoSSD(
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
                response,
                this.pathImage
            );
        }
        return response;
    }
}
export default analizeCocoSSD;
