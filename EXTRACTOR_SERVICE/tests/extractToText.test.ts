import Tesseract, { createWorker } from "tesseract.js";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { TextToImageException } from "../src/common/exception/textToImageException";
import { StatusCode } from "../src/common/statusCode";
import { Extractor } from "../src/model/tesseract/extractor";
import { ExtractToText } from "../src/model/tesseract/extractToText";
import { IBase } from "../src/model/tesseract/interfaces/iBase";

var properties: IBase = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
};

describe("Test for Parameters", () => {
	it("Testing language validation with invalid value", () => {
		properties.language = "engaoeu";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Language code: " + properties.language,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});
	it("Testing language validation with empty value", () => {
		properties.language = "";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid data parameter: Language",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});
});

describe("Test for extract function", () => {
	it("Testing...", () => {
		jest.mock('tesseract.js');
		const worker = createWorker();
		// Tesseract.mockResolvedValue();
		// properties.worker = functionToFail();
		properties.language = "eng";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new TextToImageException(
			"error",
			StatusCode.InternalServerError,
			Code.EXTRACTOR_ERROR_06
		);
		expect(async () => await extractToText.extract()).toThrow(exception);
	});
});
