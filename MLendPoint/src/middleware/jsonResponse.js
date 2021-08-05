const path = require("path");

class JsonResponse {
    response(result, algorithm, searchWord, secondsToString,image,response,pathImage) {
        if (result[0] !== undefined) {
            const objectResult = result[0];
            const objectResponse = {
                Algorithm: algorithm,
                Word: searchWord,
                Percentage: objectResult.probability,
                Second: secondsToString.parse(path.parse(image.originalname).name),
                PathImage: pathImage+image.filename
            };
            response.push(objectResponse);
        }
        return response;
    }
}

module.exports = JsonResponse;
