jest.mock("../src/model/tesseract/extractToPDF.ts");

import { ExtractToPDF } from "../__mocks__/extractToPDF";


describe("ExtractToPDF", () => {
	it("works", () => {
		expect.assertions(1);
		return new ExtractToPDF()
			.extract()
			.then((result) => expect(result).toEqual("Text"));
	});
	it("not works", () => {
		expect.assertions(1);
		return new ExtractToPDF()
			.extract()
			.catch((e) => expect(e).toEqual({ error: "Error" }));
	});
});
