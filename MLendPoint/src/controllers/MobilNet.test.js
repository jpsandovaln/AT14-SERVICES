const MobilNet = require('./MobilNet')
const path = require("path");
const { test, expect } = require("@jest/globals");

test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, dog, and 0.1", async () => {
    const obj = new MobilNet(path.join(__dirname, '../../public/images/1.jpg'), 'dog', 0.1);
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an empty object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, cow, and 0.5", async () => {
    const obj = new MobilNet(path.join(__dirname, '../../public/images/1.jpg'), 'cow', 0.5);
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, Percentage those with values pathImagen, 0.9", async () => {
    const obj = new MobilNet(path.join(__dirname, '../../public/images/1.jpg'), '', 0.9);
    const result = await obj.getJSON();
    expect(result[0]).toHaveProperty('className'); 
    expect(result[0]).toHaveProperty('probability'); 
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, golden, and 1", async () => {
    const obj = new MobilNet(path.join(__dirname, '../../public/images/1.jpg'), 'golden', 1);
    const result = await obj.getJSON();
    expect(result).toEqual([]);
}, 3000000);

test("Verify that model return an valid object array with parameters: Imagen, SearchWord, and Percentage those with values pathImagen, golden, and 0.5", async () => {
    const obj = new MobilNet(path.join(__dirname, '../../public/images/1.jpg'), 'golden', 0.5);
    const result = await obj.getJSON();
    /*
    expect(oneObj).toHaveProperty('name') // true
    expect(oneObj).toHaveProperty('name', 'component name') // true
    expect(oneObj).toEqual({name: 'component name'}) // false, should be exactly equal all Obj keys and values  
    expect(oneObj).toMatchObject({name: 'component name'}) // true
    */
    // expect(result[0]).toHaveProperty('className');
    // toMatchSnapshot [Save a Snapshot]
    // expect(result).toMatchObject(Obj);
    /*
    expect(result[0]).toHaveProperty('className',/golden/i); 
    expect(result[0]).toHaveProperty('probability'); 
    */
    expect(JSON.stringify(result)).toMatch(/golden/i);
}, 3000000);


