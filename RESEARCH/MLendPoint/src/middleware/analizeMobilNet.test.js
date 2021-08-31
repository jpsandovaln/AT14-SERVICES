jest.mock("@tensorflow/tfjs-node");
const AnalizeMobilNet = require("./analizeMobilNet");
const path = require("path");
const { test, expect } = require("@jest/globals");
const fs = require("fs");
jest.mock("fs");
jest.mock("tf");

const analizeMobilNet = new AnalizeMobilNet(
    path.join(
        "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
    ),
    "dog",
    0.1,
    1,
    "Mobilnet",
    path.join(
        "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/output"
    )
);
beforeEach(() => {
    require("tf").node.decodeImage();
});

test("test analize", async () => {
    fs.readFileSync = jest.fn();
    const recognitionModel = await analizeMobilNet.recognition();
    expect(recognitionModel).toEqual("");
}, 3000000);
