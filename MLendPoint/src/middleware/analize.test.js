const analize = require("./analize");

const analizing = new analize(
    "imagePaths",
    "searchwords",
    "percentage",
    "secondsToString",
    "algorithm",
    "pathImage"
);

describe("analize.js", () => {
    test("Verify method get imagePaths is recibing the right value ", () => {
        expect(analizing.imagePaths).toBe("imagePaths");
    });

    test("Verify method get imagePaths is recibing a wrong value ", () => {
        expect(analizing.imagePaths).not.toBe("algorithm");
    });

    test("Verify method get algorithm is recibing the right value ", () => {
        expect(analizing.algorithm).toBe("algorithm");
    });

    test("Verify method get imagePaths is recibing a wrong value ", () => {
        expect(analizing.imagePaths).not.toBe("PathImage");
    });

    test("Verify method get searchWord is recibing the right value ", () => {
        expect(analizing.searchWord).toBe("searchwords");
    });

    test("Verify method get percentage is recibing the right value ", () => {
        expect(analizing.percentage).toBe("percentage");
    });

    test("Verify method get secondsToString is recibing the right value ", () => {
        expect(analizing.secondsToString).toBe("secondsToString");
    });

    test("Verify method get pathImage is recibing the right value ", () => {
        expect(analizing.pathImage).toBe("pathImage");
    });
});
