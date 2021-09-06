import fs from "fs";
import path from "path";
import { ValidateStrategy } from "./validate_strategy";
import { ParameterInvalidException } from "../exception/parameter_exception";
import { throwable } from 'ts-throwable';

export class FileValidation implements ValidateStrategy {
    private _value: string;
    private _extensions: Array<string>;

    constructor(value: string, extensions: Array<string>) {
        this._value = value;
        this._extensions = extensions;
    }

    validate(): void | throwable<ParameterInvalidException> {
        const currentFile: any = fs.statSync(this._value);
        if (!currentFile.isFile()) {
            throw new ParameterInvalidException('The path is not a file', 'SAB-0124587');
        }

        if (currentFile.size === 0) {
            throw new ParameterInvalidException('The file size is zero', 'SAB-0124587');
        }

        const ext: string = path.extname(this._value);
        if (!this._extensions.includes(ext)) {
            throw new ParameterInvalidException('invalid extension', 'SAB-0124587');
        }
    }
}
