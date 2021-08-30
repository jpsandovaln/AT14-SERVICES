jest.mock("../src/model/tesseract/extractCroppedImage.ts");

import { createWorker } from "tesseract.js";
import { ExtractCroppedImage } from "../src/model/tesseract/extractCroppedImage";
import { ICropped } from "../src/model/tesseract/interfaces/iCropped";

describe("ExtractCroppedImage", () => {
	it("works", () => {
		expect.assertions(1);
		const worker = createWorker();
		const rectanglePart = {
			left: 0,
			top: 0,
			width: 500,
			height: 250,
		};
		const imageToCropped: ICropped = {
			worker: worker,
			language: "eng",
			path: "https://telegram.org/file/811140100/2/maZcBXgwrmE.306486/5bd7c8f4708afe28f8",
			rectangle: rectanglePart,
		};
		return new ExtractCroppedImage(imageToCropped)
			.extract()
			.then((result) => expect(result).toEqual("Text"));
	});

	// it("not works", () => {
	// 	expect.assertions(1);
	// 	return new ExtractCroppedImage.extract().catch((e) =>
	// 		expect(e).toEqual({ error: "Error" })
	// 	);
	// });
});
