jest.mock("../src/model/tesseract/extractCroppedImage.ts");

import { createWorker } from "tesseract.js";
import { ExtractCroppedImage } from "../src/model/tesseract/extractCroppedImage";
import { Extractor } from "../src/model/tesseract/extractor";
import { ICropped } from "../src/model/tesseract/interfaces/iCropped";

describe("ExtractCroppedImage", () => {
	it("works", async () => {
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
		const extractorCroppedImage: Extractor = new ExtractCroppedImage(imageToCropped);
		expect(extractorCroppedImage.extract().resolves.toEqual('Text'));
		// return extractorCroppedImage.extract()
		// 	.then((result:any) => expect(result).toEqual("Text"));
	});

	// it("not works", () => {
	// 	expect.assertions(1);
	// 	return new ExtractCroppedImage.extract().catch((e) =>
	// 		expect(e).toEqual({ error: "Error" })
	// 	);
	// });
});
