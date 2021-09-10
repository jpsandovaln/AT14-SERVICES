import { createWorker } from "tesseract.js";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { StatusCode } from "../src/common/statusCode";
import { Extractor } from "../src/model/tesseract/extractor";
import { ExtractToPDF } from "../src/model/tesseract/extractToPDF";
import { ExtractToText } from "../src/model/tesseract/extractToText";
import { IBase } from "../src/model/tesseract/interfaces/iBase";

var properties: IBase = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
};

describe("Parameters Exception Extract To PDF", () => {

	it("Validation with invalid value", () => {
		properties.path = "httaoeup://";
		const extractToText: Extractor = new ExtractToPDF(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Language code: " + properties.language,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

	it("Validation with empty value", () => {
		properties.path = "";
		const extractToText: Extractor = new ExtractToPDF(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid data parameter: Language",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});

});
