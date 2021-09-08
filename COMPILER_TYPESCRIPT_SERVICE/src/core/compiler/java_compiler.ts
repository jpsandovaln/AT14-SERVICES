import { JavaCommand } from "../command/java_command";
import { JavaParameter } from "../parameter/java_parameter";
<<<<<<< Updated upstream
import { Compiler } from "./compiler";
import { Executer } from "../execute/executer";

export class JavaCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
        this._path = path;
        this._binary = binary;
=======
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
>>>>>>> Stashed changes
    }

    public async compiler(): Promise<object> {
        const javaCommand: JavaCommand = new JavaCommand();
        const javaParameter: JavaParameter = new JavaParameter(this._path, this._binary);
        const command = javaCommand.build(javaParameter);
<<<<<<< Updated upstream
        return await this.executeCommand(command);
=======
        return await this._execute.run(command);
>>>>>>> Stashed changes
    }
}
