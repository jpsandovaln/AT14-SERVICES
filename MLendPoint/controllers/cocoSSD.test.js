const CocoSSD = require("./CocoSSD");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
//const tf.node. = jest.fn("there is two dogs");
jest.mock("@tensorflow/tfjs-node");
jest.mock("fs");
jest.mock("@tensorflow-models/coco-ssd");

const cocoSSd = new CocoSSD("image", "searchWord", 0.5);
const arr = { classname: "Dog", probability: "90%" };
describe("cocoSSD.js", () => {
    test("Verify that method testModel is returning an empty string", async () => {
        const mockModel = { base: "mobilenet_v2" };
        const buf = fs.readFileSync.mockImplementation(() => "image_dog");

        //real function

        // const input = tf.node.decodeJpeg.mockImplementation(
        //     () => "there is two dogs"
        // );

        //mocked one
        //const input = tf;

        const model = await cocoSsd.load.mockImplementation(() =>
            Promise.resolve(mockModel)
        );
        const predictions = await model
            .detect(input)
            .mockImplementation(() => "there is two dogs");

        this.predictions = predictions;

        const testModel = await cocoSSd.testModel();

        expect(testModel).toBe("");
    });

    test("Verify that method loadModel returns an object Json", () => {
        const image = fs.readFileSync.mockImplementation(() => "image_dog");

        ///
        //const processInput = tf.node.decodeImage(image).mockImplementation(() =>"there is two dogs")
        const model = await cocoSsd
            .load()
            .mockImplementation(() => "there is two dogs");
        const parse = cocoSSd.parse(arr);
        expect(parse).toEqual({ classname: "Dog", probability: "90%" });
    });

    test("Verify that method getJson returns an object Json", () => {
        let quantity = 0;
        this.predictions = cocoSsd.load.mockImplementation(() =>
            Promise.resolve(mockModel)
        );
        const parse = cocoSSd.parse(arr);
        expect(parse).toEqual({ classname: "Dog", probability: "90%" });
    });

    test("Verify that method parse returns an array", () => {
        const parse = cocoSSd.parse(arr);
        expect(parse).toEqual({ classname: "Dog", probability: "90%" });
    });

    //Ver test test
});
