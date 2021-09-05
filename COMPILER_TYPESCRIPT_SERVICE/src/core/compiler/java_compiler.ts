import { JavaCommand } from "../command/java_command";
import { JavaParameter } from "../parameter/java_parameter";
import { Execute } from "../execute/execute";
import { Compiler } from "./compiler";

export class JavaCompiler implements Compiler {
    private _path: string;
    private _binary: string;
    private _execute: Execute;

    constructor(path: string, binary: string) {
        this._path = path;
        this._binary = binary;
        this._execute = new Execute();
    }

    public async compiler(): Promise<object> {
        const javaCommand: JavaCommand = new JavaCommand();
        const javaParameter: JavaParameter = new JavaParameter(this._path, this._binary);
        const command = javaCommand.build(javaParameter);
        return await this._execute.run(command);
    }
}
