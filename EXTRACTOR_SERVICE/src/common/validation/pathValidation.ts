import { Code } from "../code";
import { ExtractorException } from "../exception/extractorException";
import { StatusCode } from "../statusCode";
import { ValidateStrategy } from "./validateStrategy";
import * as path from "path";

export class PathValidation extends ValidateStrategy {
	private _path: string;
	constructor(path: string) {
		super();
		this._path = path;
	}

	validate(): void {
		if(!path.isAbsolute(this._path) || !new URL(this._path)){
			throw new ExtractorException(
				"Invalid Path: " + this._path,
				StatusCode.BadRequest,
				Code.EXTRACTOR_ERROR_02
			);
		}
	}
}
