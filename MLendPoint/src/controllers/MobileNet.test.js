const MobilNet = require("./MobilNet");
const path = require("path");
const { test, expect } = require("@jest/globals");
require("dotenv").config("../../src/.env");

test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, dog, and 0.1", async () => {
    const obj = new MobilNet(
        path.join(
            "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
        ),
        "dog",
        0.1
    );
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, cow, and 0.5", async () => {
    const obj = new MobilNet(
        path.join(
            "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
        ),
        "cow",
        0.5
    );
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, Percentage those with values pathImagen, 0.9", async () => {
    const obj = new MobilNet(
        path.join(
            "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
        ),
        "",
        0.5
    );
    const result = await obj.getJSON();
    expect(result[0]).toHaveProperty("className");
    expect(result[0]).toHaveProperty("probability");
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, golden, and 1", async () => {
    const obj = new MobilNet(
        path.join(
            "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
        ),
        "golden",
        1
    );
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, golden, and 0.5", async () => {
    const obj = new MobilNet(
        path.join(
            "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/TEST/resources/dog.jpg"
        ),
        "golden",
        0.5
    );
    const result = await obj.getJSON();
    expect(JSON.stringify(result)).toMatch(/golden/i);
}, 3000000);
