import Tesseract, {
	createWorker,
	recognize,
	RecognizeResult,
} from "tesseract.js";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { TextToImageException } from "../src/common/exception/textToImageException";
import { StatusCode } from "../src/common/statusCode";
import { Extractor } from "../src/model/tesseract/extractor";
import { ExtractToText } from "../src/model/tesseract/extractToText";
import { IBase } from "../src/model/tesseract/interfaces/iBase";
import { instance, mock, when } from "ts-mockito";

var properties: IBase = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
};

describe("Parameters Exception", () => {
	it("Validation with invalid value", () => {
		properties.language = "engaoeu";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new ExtractorException(
			"Invalid Language code: " + properties.language,
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_02
		);
		expect(() => extractToText.validateParameter()).toThrow(exception);
	});
	it("Validation with empty value", () => {
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

/* This method doesn't work correctly in the line 49 I have the error.
	* I try to use .thenResolve() of mockito library, but I get another error.
*/
describe("Tests for extract() exception.", () => {
	it("Text to image Exception", () => {
		let mockedWorker: any = mock(createWorker());
		let data: RecognizeResult = mock({});
		let mockedRecognizeResult: Promise<RecognizeResult> = mock(data);
		when(createWorker().recognize("test")).thenReturn(
			mockedRecognizeResult
		);
		properties.worker = mockedWorker;
		properties.language = "eng";
		const extractToText: Extractor = new ExtractToText(properties);
		const exception: ExtractorException = new TextToImageException(
			"error",
			StatusCode.InternalServerError,
			Code.EXTRACTOR_ERROR_06
		);
		expect(extractToText.extract()).toThrow(exception);
	});
});

/* Also I was trying this, but doesn't work too */

// describe("Test for extract function", () => {
// 	it("Testing...", () => {
// 		let mockedExtractor = mock(ExtractToText);
// 		when(mockedExtractor.extract()).thenThrow(new TextToImageException(
// 			"error",
// 			StatusCode.InternalServerError,
// 			Code.EXTRACTOR_ERROR_06
// 		));
// 		properties.language = "eng";
// 		const extractToText: Extractor = instance(mockedExtractor);
// 		const exception: ExtractorException = new TextToImageException(
// 			"error",
// 			StatusCode.InternalServerError,
// 			Code.EXTRACTOR_ERROR_06
// 		);
// 		expect(extractToText.extract()).toThrow(exception);
// 	});
// });
