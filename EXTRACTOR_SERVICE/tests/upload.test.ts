import express from "express";
import { mock } from "ts-mockito";
import { Code } from "../src/common/code";
import { FileUploadException } from "../src/common/exception/fileUploadException";
import { StatusCode } from "../src/common/statusCode";
import { Upload } from "../src/middleware/upload";


describe("Upload Exception", () => {

	it("Just accept png, jpg, jpeg", () => {
		const upload = new Upload();
		const req = {file: {mimetype: "image/pnga"}}
		const reqMock:express.Request = mock(req);
		const resMock:express.Response = mock(req);
		const exception: FileUploadException = new FileUploadException(
			"File types allowed .jpeg, .jpg and .png",
			StatusCode.BadRequest,
			Code.EXTRACTOR_ERROR_01
		);
		// expect(async() => await upload.fileUploadMiddleware(reqMock, resMock)).toThrow(exception);
	});

});
