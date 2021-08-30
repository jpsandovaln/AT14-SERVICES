import { ExtractorException } from "./extractorException";

export class TextToImageException extends ExtractorException {
	constructor(message: any, status: string, code: string) {
		super(message, status, code);
	}
}
