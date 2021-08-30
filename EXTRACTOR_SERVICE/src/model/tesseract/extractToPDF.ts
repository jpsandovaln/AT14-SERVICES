import { IBase } from "./interfaces/iBase";
import { Extractor } from "./extractor";
import * as fs from "fs";
import { PDFToImageException } from "../../common/exception/pdfToImageException";
export class ExtractToPDF extends Extractor {
	constructor(properties: IBase) {
		super(properties);
	}

	public async extract(): Promise<object> {
		try {
			await this.loadWorker();
			await this.worker.recognize(this.path);
			const { data } = await this.worker.getPDF("Tesseract OCR Result");
			fs.writeFileSync("tesseract-ocr-result.pdf", Buffer.from(data));
			await this.worker.terminate();
			return data;
		} catch (error) {
			throw new PDFToImageException(
				error,
				"500-Internal Server Error",
				"EXTRACTOR-ERROR-05"
			);
		}
	}
}
