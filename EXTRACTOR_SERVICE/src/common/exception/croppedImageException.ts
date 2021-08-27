import { ExtractorException } from "./extractorException";

export class CroppedImageException extends ExtractorException {
	constructor(message: any, status: string, code: string) {
		super(message, status, code);
	}
}
