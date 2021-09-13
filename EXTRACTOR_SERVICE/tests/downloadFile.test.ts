import express from "express";
import { mock } from "ts-mockito";
import { DownloadFile } from "../src/controller/downloadFile";


describe("Downlad FIle", () => {

	it("Exception to downloaded", () => {
		const download = new DownloadFile();
		const req = {file: {mimetype: "image/pnga"}}
		const reqMock:express.Request = mock(req);
		const resMock:express.Response = mock(req);
		const exception: Error = new Error('error');
		// expect(async() => await download.downloadPDF(reqMock, resMock)).toThrow(exception);
	});

});
