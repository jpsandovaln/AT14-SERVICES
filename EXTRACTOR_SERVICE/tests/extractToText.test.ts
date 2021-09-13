import { createWorker } from "tesseract.js";
import { mock, when } from "ts-mockito";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { TextToImageException } from "../src/common/exception/textToImageException";
import { StatusCode } from "../src/common/statusCode";
import { ExtractToText } from "../src/model/tesseract/extractToText";

describe("Extract to Text Exception", () => {
	it("", async () => {
		let mockedWorker: Tesseract.Worker = mock(createWorker());
		debugger;
		when(mockedWorker.load).thenReturn();
		when(mockedWorker.loadLanguage).thenReturn();
		when(mockedWorker.initialize).thenReturn();
		when(mockedWorker.recognize).thenThrow(
			new Error("error")
			// new TextToImageException(
			// 	"Error: Invalid Path: https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
			// 	StatusCode.InternalServerError,
			// 	Code.EXTRACTOR_ERROR_06
			// )
		);

		const imageBasic = {
			worker: mockedWorker,
			language: "spa",
			path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
		};

		const text = new ExtractToText(imageBasic);
		const exception: ExtractorException = new TextToImageException(
			"Error: Invalid Path: https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
			StatusCode.InternalServerError,
			Code.EXTRACTOR_ERROR_06
		);
		expect(await text.extract()).toThrow(new Error("error"));
	});
});
