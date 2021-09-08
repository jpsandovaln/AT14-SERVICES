import { PythonCommand } from "../command/python_command";
import { PythonParameter } from "../parameter/python_parameter";
<<<<<<< Updated upstream
import { Executer } from "../execute/executer";
import { Compiler } from "./compiler";

export class PythonCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
        this._path = path;
        this._binary = binary;
=======
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
>>>>>>> Stashed changes
    }

    public async compiler(): Promise<object> {
        const pythonCommand: PythonCommand = new PythonCommand();
        const pythonParameter: PythonParameter = new PythonParameter(this._path, this._binary);
        const command = pythonCommand.build(pythonParameter);
<<<<<<< Updated upstream
        return await this.executeCommand(command);
=======
        return await this._execute.run(command);
>>>>>>> Stashed changes
    }
}
