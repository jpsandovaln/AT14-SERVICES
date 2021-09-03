import { Code } from "../code";
import { StatusCode } from "../statusCode";
import { ExtractorException } from "./extractorException";

export class LoadWorkerException extends ExtractorException {
	constructor(message: any, status: StatusCode, code: Code) {
		super(message, status, code);
	}
}
