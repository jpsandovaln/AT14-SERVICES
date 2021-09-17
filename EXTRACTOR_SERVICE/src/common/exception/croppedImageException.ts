import { Code } from "../code";
import { StatusCode } from "../statusCode";
import { ExtractorException } from "./extractorException";

export class CroppedImageException extends ExtractorException {
	constructor(message: any, status: StatusCode, code: Code) {
		super(message, status, code);
	}
}
