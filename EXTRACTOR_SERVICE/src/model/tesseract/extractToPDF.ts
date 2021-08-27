import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import * as fs from "fs";
// import { ExtractorException } from "../../common/exception/extractorException";
import { ExceptionType } from "../../common/exception/exceptionType";
import { Message } from "../../common/exception/message";
export class ExtractToPDF extends Extractor {
	constructor(properties: IBase) {
		super(properties);
	}

	public async extract(): Promise<object> {
		await this.loadWorker();
		await this.worker.recognize(this.path);
		const { data } = await this.worker.getPDF("Tesseract OCR Result");
		fs.writeFileSync("tesseract-ocr-result.pdf", Buffer.from(data));
		await this.worker.terminate();
		return data;
	}
}
