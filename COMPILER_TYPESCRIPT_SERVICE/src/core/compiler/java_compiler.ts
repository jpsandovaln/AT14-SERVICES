import { JavaCommand } from "../command/java_command";
import { JavaParameter } from "../parameter/java_parameter";
import { Compiler } from "./compiler";
import { Executer } from "../execute/executer";

export class JavaCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
        this._path = path;
        this._binary = binary;
    }

    public async compiler(): Promise<object> {
        const javaCommand: JavaCommand = new JavaCommand();
        const javaParameter: JavaParameter = new JavaParameter(this._path, this._binary);
        const command = javaCommand.build(javaParameter);
        return await this.executeCommand(command);
    }
}
