import path from "path";

class JsonResponse {
    response(
        result: any, //TODO: review type of data
        algorithm: string,
        secondsToString: JSON,
        image: any, //TODO: review type of data
        response: Array<object>,
        pathImage: string
    ) {
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
