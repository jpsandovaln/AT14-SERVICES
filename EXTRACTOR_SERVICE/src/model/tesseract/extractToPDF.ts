import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import * as fs from "fs";
import { ExtractorException } from "../../common/exception/extractorException";
import { ExceptionType } from "../../common/exception/exceptionType";
import { Message } from "../../common/exception/message";
export class ExtractToPDF extends Extractor {
	constructor(properties: IBase) {
		super(properties);
	}

	public async extract(): Promise<object> {
		await this.loadWorker();
		await this.worker.recognize(this.path).catch( (error:any) => {
			const message: Message = {
				message: error,
				exceptionType: ExceptionType.ExtractorException
			};
			console.log(message);
			throw new ExtractorException(message);
		});
		const { data } = await this.worker.getPDF("Tesseract OCR Result");
		fs.writeFileSync("public/uploads/tesseract-ocr-result.pdf", Buffer.from(data));
		return data;
	}
}
