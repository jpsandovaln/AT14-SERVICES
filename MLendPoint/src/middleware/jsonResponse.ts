import path from "path";
import SecondsToString from "./secondToString";

class JsonResponse {
    response(
        result: any,
        algorithm: string,
        searchWord: string,
        secondsToString: SecondsToString,
        image: any,
        response: any,
        pathImage: any
    ): any {
        if (result[0] !== undefined) {
            const objectResult = result[0];
            const objectResponse = {
                Algorithm: algorithm,
                Word: objectResult.className,
                Percentage: objectResult.probability,
                Second: secondsToString.parse(
                    path.parse(image.originalname).name
                ),
                PathImage: pathImage + image.filename
            };
            response.push(objectResponse);
        }
        return response;
    }
}

export default JsonResponse;
