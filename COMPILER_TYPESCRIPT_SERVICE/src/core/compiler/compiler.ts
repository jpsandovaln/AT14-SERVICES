import { Execute } from "../execute/execute";

export abstract class Compiler {
    private execute: Execute;

    constructor() {
        this.execute = new Execute();
    }

    protected executeCommand(cmd: string): Promise<object> {
        return this.execute.run(cmd);
    }

    abstract compiler(): Promise<object>;
}
