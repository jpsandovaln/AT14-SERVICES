const CocoSSD = require("./CocoSSD");
const path = require("path");
const { test, expect } = require("@jest/globals");

// describe("cocoSSD.js", () => {
test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, dog, and 0.1", async () => {
    const obj = new CocoSSD(
        path.join(__dirname, "../../public/images/pastoraleman.jpg"),
        "dog",
        0.1
    );
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

// test("Verify that method getJson returns an object Json", () => {
//     let quantity = 0;
//     this.predictions = cocoSsd.load.mockImplementation(() =>
//         Promise.resolve(mockModel)
//     );
//     const parse = cocoSSd.parse(arr);
//     expect(parse).toEqual({ classname: "Dog", probability: "90%" });
// });

// test("Verify that method parse returns an array", () => {
//     const parse = cocoSSd.parse(arr);
//     expect(parse).toEqual({ classname: "Dog", probability: "90%" });
// });

//Ver test test
// });
