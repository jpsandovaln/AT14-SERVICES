import { CompilerException } from "./compiler_exception";

export class ParameterInvalidException extends CompilerException {
    constructor(message: string, code: string) {
        super(message, 405, code);
        this.name = 'ParameterInvalidException';
    }
}
