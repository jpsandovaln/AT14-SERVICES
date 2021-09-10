import { Code } from "../src/common/code";
import { ExtractorException } from "../src/common/exception/extractorException";
import { StatusCode } from "../src/common/statusCode";
import { ParamsCropped } from "../src/middleware/paramsCropped";
import { CroppedImageException } from "../src/common/exception/croppedImageException";

var rectangle = { left: 101, top: 101, width: 1001, height: 1001};

describe("Parameters Exception CroppedImage", () => {

	it("Validate left > 100", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: " + rectangle.left + " Can't be more than '100px'",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		);
		expect(() => paramsCropped.checkLeftTop(rectangle.left)).toThrow(exception);
	});

	it("Validate top > 100", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: " + rectangle.top + " Can't be more than '100px'",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		);
		expect(() => paramsCropped.checkLeftTop(rectangle.top)).toThrow(exception);
	});

	it("Validate height > 1000", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: " + rectangle.height + " Can't be more than '1000px'",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
		expect(() => paramsCropped.checkWidthHeight(rectangle.height)).toThrow(exception);
	});

	it("Validate height < 1000", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: " + rectangle.width + " Can't be more than '1000px'",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
		expect(() => paramsCropped.checkWidthHeight(rectangle.width)).toThrow(exception);
	});

	it("Validate if is empty", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: Empty",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
		expect(() => paramsCropped.checkIsEmpty('')).toThrow(exception);
	});

	it("Validate if is String", () => {
		const paramsCropped = new ParamsCropped();
		const exception: ExtractorException = new CroppedImageException(
			"Invalid data parameter: " + 'aoeu',
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		)
		expect(() => paramsCropped.checkString('aoeu')).toThrow(exception);
	});
});
