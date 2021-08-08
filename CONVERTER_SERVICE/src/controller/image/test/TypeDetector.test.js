const TypeDetector = require("../TypeDetector.js");

test("detectType() with a value of => '1' from TypeDectector should return a 'True' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType(1);
    const expected = true;
    expect(result).toBe(expected)
})
test("detectType() with a value of => 'true' from TypeDectector should return a 'True' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType(true);
    const expected = true;
    expect(result).toBe(expected)
})
test("detectType() with a value of => 'string' from TypeDectector should return a 'True' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType('string');
    const expected = true;
    expect(result).toBe(expected)
})
test("detectType() with a value of => 'false' from TypeDectector should return a 'False' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType(false);
    const expected = false;
    expect(result).toBe(expected)
})
test("detectType() with a value of => '' from TypeDectector should return a 'False' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType('');
    const expected = false;
    expect(result).toBe(expected)
})
test("detectType() with a value of => 'null' from TypeDectector should return a 'false' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType(null);
    const expected = false;
    expect(result).toBe(expected)
})
test("detectType() with a value of => 'undefined' from TypeDectector should return a 'false' value", () => {

    const typeDetector = new TypeDetector();
    const result = typeDetector.detectType(undefined);
    const expected = false;
    expect(result).toBe(expected)
})