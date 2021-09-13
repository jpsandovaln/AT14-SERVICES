import { createWorker } from "tesseract.js";
import { mock, when } from "ts-mockito";
import { Code } from "../src/common/code";
import { CroppedImageException } from "../src/common/exception/croppedImageException";
import { ExtractorException } from "../src/common/exception/extractorException";
import { StatusCode } from "../src/common/statusCode";
import { ExtractCroppedImage } from "../src/model/tesseract/extractCroppedImage";
import { ICropped } from "../src/model/tesseract/interfaces/iCropped";

var properties: ICropped = {
	worker: createWorker(),
	language: "eng",
	path: "https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
	rectangle: {}
};

describe("Extract Cropped Image Exception", () => {
	it("Copped image exception", async () => {
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
		const text = new ExtractCroppedImage(properties);
		const exception: ExtractorException = new CroppedImageException(
			"Error: Invalid Path: https://res.cloudinary.com/marcandea/image/upload/v1629733958/samples/text-eng-chin_kxe165.png",
			StatusCode.InternalServerError,
			Code.EXTRACTOR_ERROR_06
		);
		expect(await text.extract()).toThrow(new Error("error"));
	});
});
