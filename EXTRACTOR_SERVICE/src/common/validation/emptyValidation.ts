import { Code } from "../code";
import { ExtractorException } from "../exception/extractorException";
import { StatusCode } from "../statusCode";
import { ValidateStrategy } from "./validateStrategy";

export class EmptyValidation extends ValidateStrategy {
	private _value: any;
	private _parameter: any;
	constructor(parameter: any, value: any) {
		super();
		this._parameter = parameter;
		this._value = value;
	}

	validate(): void{
		if (!this._value || this._value.trim().length === 0) {
			throw new ExtractorException(
				"Invalid data parameter: " + this._parameter,
				StatusCode.BadRequest,
				Code.EXTRACTOR_ERROR_01
			);
		}
	}
}
