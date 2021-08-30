import { ExtractorException } from "./extractorException";

export class PDFToImageException extends ExtractorException {
	constructor(message: any, status: string, code: string) {
		super(message, status, code);
	}
}
