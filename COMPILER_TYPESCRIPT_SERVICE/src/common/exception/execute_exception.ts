import { CompilerException } from "./compiler_exception";

export class ExecuteException extends CompilerException {
    constructor(message: string) {
        super(message, 405, 'SAB-9877');
    }
}
