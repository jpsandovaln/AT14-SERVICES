import { ValidateStrategy } from "./validate_strategy";
import { ParameterInvalidException } from "../exception/parameter_exception";
import { throwable } from 'ts-throwable';

export class NotNullOrEmptyValidation implements ValidateStrategy {
    private _field: string;
    private _value: string;

    constructor(field: string, value: string) {
        this._field = field;
        this._value = value;
    }

    validate(): void | throwable<ParameterInvalidException> {
        if (!this._value || this._value.trim().length === 0) {
            throw new ParameterInvalidException('Invalid data field: ' + this._field, 'SAB-0124587');
        }
    }
}
