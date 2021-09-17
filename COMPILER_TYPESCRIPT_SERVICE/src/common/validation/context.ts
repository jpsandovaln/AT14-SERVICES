import { ValidateStrategy } from "./validate_strategy";
import { throwable } from 'ts-throwable';
import { ParameterInvalidException } from "../exception/parameter_exception";

export class Context {
    private _strategies: Array<ValidateStrategy>;

    constructor(strategies: Array<ValidateStrategy>) {
        this._strategies = strategies;
    }

    validate(): void | throwable<ParameterInvalidException> {
        this._strategies.forEach(strategy => {
            strategy.validate();
        });
    }
}
