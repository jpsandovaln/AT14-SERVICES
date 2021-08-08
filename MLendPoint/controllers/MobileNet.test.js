const MobilNet = require("./MobilNet");
const fs = require("fs");
const mobilenet = require("@tensorflow-models/mobilenet");
const tfnode = require("@tensorflow/tfjs-node");

jest.mock("@tensorflow/tfjs-node");
jest.mock("fs");
jest.mock("@tensorflow-models/coco-ssd");

const movileNet = new MobilNet("image", "searchWord", 0.5);
const arr = { classname: "Dog", probability: "90%" };

describe("MovileNet.js", () => {
    test("Verify that method loadModel returns an object Json", () => {
        const image = fs.readFileSync.mockImplementation(() => "image_dog");
        //const tfimage = tfnode.node.decodeImage(image).mockImplementation(() => arr)
        const model = await mobilenet
            .load()
            .mockImplementation(() => "there is two dogs");
        const predictions = await model
            .classify(tfimage)
            .mockImplementation(() => ({
                classname: "Dog",
                probability: "90%"
            }));
        expect(predictions).toEqual({ classname: "Dog", probability: "90%" });
    });

    test("Verify that method getJson returns an object Json", () => {
        let quantity = 0;
        this.predictions = await movileNet
            .loadmodel()
            .mockImplementation(() => ({
                classname: "Dog",
                probability: "90%"
            }));
        const parse = movileNet.parse(arr).mockImplementation(() => ({
            classname: "Dog",
            probability: "90%"
        }));
        expect(parse).toEqual({ classname: "Dog", probability: "90%" });
    });

    test("Verify that method parse returns an array", () => {
        const parse = movileNet.parse(arr);

        expect(parse).toEqual({ classname: "Dog", probability: "90%" });
    });
});
