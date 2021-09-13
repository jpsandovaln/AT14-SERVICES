import { createWorker } from "tesseract.js";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { StatusCode } from "../src/common/statusCode";
import { Extractor } from "../src/model/tesseract/extractor";
import { ExtractToText } from "../src/model/tesseract/extractToText";
import { IBase } from "../src/model/tesseract/interfaces/iBase";
import { mock, when, instance } from "ts-mockito";
import { TextToImageException } from "../src/common/exception/textToImageException";

var properties: IBase = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
};

describe("Parameters Exception Extractor", () => {
	it("Validation with invalid language", () => {
		properties.language = "engaoeu";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Language code: " + properties.language,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

	it("Validation with empty value in language", () => {
		properties.language = "";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Empty parameter: Language",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

	it("Validation with invalid path url", () => {
		properties.language = "eng";
		properties.path =
			"https://stackoverflow.com/questions/21698906/how-to-check-if-a-path-is-absolute-or-relative";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Path: " + properties.path,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

	it("Validation with invalid path url", () => {
		properties.language = "eng";
		properties.path = "EXTRACTOR_SERVICE/src/routes/index.ts";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Path: " + properties.path,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

	it("Validation with empty value in path", () => {
		properties.path = "";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Empty parameter: Path",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});
});
