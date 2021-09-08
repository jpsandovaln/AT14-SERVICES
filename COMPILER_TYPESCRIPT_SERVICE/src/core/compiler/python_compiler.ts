import { PythonCommand } from "../command/python_command";
import { PythonParameter } from "../parameter/python_parameter";
import { Executer } from "../execute/executer";
import { Compiler } from "./compiler";

export class PythonCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
        this._path = path;
        this._binary = binary;
    }

    public async compiler(): Promise<object> {
        const pythonCommand: PythonCommand = new PythonCommand();
        const pythonParameter: PythonParameter = new PythonParameter(this._path, this._binary);
        const command = pythonCommand.build(pythonParameter);
        return await this.executeCommand(command);
    }
}
