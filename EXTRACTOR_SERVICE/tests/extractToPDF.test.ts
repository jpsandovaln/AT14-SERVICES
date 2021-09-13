import { createWorker } from "tesseract.js";
import { mock, when } from "ts-mockito";
import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { ImageToPDFException } from "../src/common/exception/imageToPDFException";
import { StatusCode } from "../src/common/statusCode";
import { ExtractToPDF } from "../src/model/tesseract/extractToPDF";

describe("Extract Text to PDF Exception", () => {
	it("Image to pdf exception", async () => {
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

		const text = new ExtractToPDF(imageBasic);
		const exception: ExtractorException = new ImageToPDFException(
			"Error: Invalid Path: https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
			StatusCode.InternalServerError,
			Code.EXTRACTOR_ERROR_06
		);
		expect(await text.extract()).toThrow(new Error("error"));
	});
});
