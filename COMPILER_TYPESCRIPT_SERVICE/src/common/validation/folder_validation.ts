import fs from "fs";
import { ValidateStrategy } from "./validate_strategy";
import { ParameterInvalidException } from "../exception/parameter_exception";
import { throwable } from 'ts-throwable';

export class FolderValidation implements ValidateStrategy {
    private _value : string;

    constructor(value: string) {
        this._value = value;
    }

    validate(): void | throwable<ParameterInvalidException> {
        const currentFolder : any = fs.statSync(this._value);
        if (!currentFolder.isDirectory()) {
            throw new ParameterInvalidException('The path is not a folder', 'SAB-0124587');
        }
    }
}
