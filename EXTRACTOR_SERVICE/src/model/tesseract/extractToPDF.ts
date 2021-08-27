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
			fs.writeFileSync(
				"public/uploads/tesseract-ocr-result.pdf",
				Buffer.from(data)
			);
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
