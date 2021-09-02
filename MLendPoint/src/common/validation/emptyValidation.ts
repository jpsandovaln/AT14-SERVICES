import { MachineLearningException } from "../exception/machineLearningException";
import { ValidateStrategy } from "./validateStrategy";

export class EmptyValidation extends ValidateStrategy {
	private _value: any;
	private _parameter: any;
	constructor(parameter: any, value: any) {
		super();
		this._parameter = parameter;
		this._value = value;
	}

	validate() {
		if (!this._value || this._value.trim().length === 0) {
			throw new MachineLearningException(
				"Invalid data parameter: " + this._parameter,
				400,
				"ML-ERROR-01"
			);
		}
	}
}
