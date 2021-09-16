import JsonResponse from "./jsonResponse";
import SecondsToString from "./secondToString";

const jsonResponse = new JsonResponse();

test("JSON response", () => {
    const response = jsonResponse.response(
        [{ className: "pepe", probability: 0.5 }],
        "CocoSSD",
        new SecondsToString(),
        { originalname: "justo", filename: "name" },
        [],
        "path"
    );

    expect(response).toEqual([
        {
            Algorithm: "CocoSSD",
            PathImage: "pathname",
            Percentage: 0.5,
            Second: "NaN:NaN:NaN",
            Word: "pepe"
        }
    ]);
});
