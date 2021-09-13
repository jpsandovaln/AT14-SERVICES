import multer from "multer";
import { createWorker } from "tesseract.js";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { StatusCode } from "../src/common/statusCode";
import { FileController } from "../src/controller/file.controller";
import { Upload } from "../src/middleware/upload";
import { Extractor } from "../src/model/tesseract/extractor";
import { ExtractToText } from "../src/model/tesseract/extractToText";
import { IBase } from "../src/model/tesseract/interfaces/iBase";

var properties: IBase = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
};

describe("File Controller Exception", () => {

	it("extract text endpoint", () => {
		const fileController = new FileController();
		// upload.upload
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: Error = new Error('error');
		expect(() => fileController.extractText).toThrow(exception);
	});

	it("extract to PDF endpoint", () => {
		const fileController = new FileController();
		// upload.upload
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: Error = new Error('error');
		expect(() => fileController.extractToPDF).toThrow(exception);
	});

	it("extract cropped image endpoint", () => {
		const fileController = new FileController();
		// upload.upload
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: Error = new Error('error');
		expect(() => fileController.extractCroppedImage).toThrow(exception);
	});

});
