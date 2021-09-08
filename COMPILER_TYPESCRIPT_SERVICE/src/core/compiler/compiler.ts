<<<<<<< Updated upstream
import { Executer } from "../execute/executer";

export abstract class Compiler {
    private _execute: Executer;

    constructor(executer: Executer) {
        this._execute = executer;
    }

    protected executeCommand(cmd: string): Promise<object> {
        return this._execute.run(cmd);
    }

    abstract compiler(): Promise<object>;
=======
export interface Compiler {
    compiler(): Promise<object>;
>>>>>>> Stashed changes
}
