import { PythonCommand } from "../command/python_command";
import { PythonParameter } from "../parameter/python_parameter";
import { Execute } from "../execute/execute";
import { Compiler } from "./compiler";

export class PythonCompiler implements Compiler {
    private _path: string;
    private _binary: string;
    private _execute: Execute;

    constructor(path: string, binary: string) {
        this._path = path;
        this._binary = binary;
        this._execute = new Execute();
    }

    public async compiler(): Promise<object> {
        const pythonCommand: PythonCommand = new PythonCommand();
        const pythonParameter: PythonParameter = new PythonParameter(this._path, this._binary);
        const command = pythonCommand.build(pythonParameter);
        return await this._execute.run(command);
    }
}
