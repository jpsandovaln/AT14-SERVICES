const CocoSSD = require('./CocoSSD')
const path = require("path");
const { test, expect } = require("@jest/globals");

test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, cow, and 0.1", async () => {
    const obj = new CocoSSD(path.join(__dirname, '../../public/images/1.jpg'), 'cow', 0.1);
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 6000000);
