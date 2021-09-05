import { CompilerException } from "./compiler_exception";

export class CommandException extends CompilerException {
    constructor(message: string, status: number, code: string) {
        super(message, status, code);
    }
}
