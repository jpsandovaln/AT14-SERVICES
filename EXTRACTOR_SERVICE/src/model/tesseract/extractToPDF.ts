import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import * as fs from "fs";
import { ImageToPDFException } from "../../common/exception/imageToPDFException";
import { StatusCode } from "../../common/statusCode";
import { Code } from "../../common/code";

export class ExtractToPDF extends Extractor {
	constructor(properties: IBase) {
		super(properties);
	}

	public async extract(): Promise<string> {
		let date = new Date();
		let nameResultFile = date.getTime()+".pdf";
		try {
			await this.loadWorker();
			await this.worker.recognize(this.path);
			const { data } = await this.worker.getPDF("Tesseract OCR Result");
			fs.writeFileSync(
				process.env.UPLOAD_PATH + nameResultFile,
				Buffer.from(data)
			);
			return nameResultFile;
		} catch (error) {
			throw new ImageToPDFException(
				error,
				StatusCode.InternalServerError,
				Code.EXTRACTOR_ERROR_05
			);
		}
	}
}
