import { Compiler } from "./compiler";
import { CShardCode } from "./code/cshard_code";
<<<<<<< Updated upstream
import { Executer } from "../execute/executer";

export class CShardCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
=======

export class CShardCompiler implements Compiler {
    private _path: string;
    private _binary: string;

    constructor(path: string, binary: string) {
>>>>>>> Stashed changes
        this._path = path;
        this._binary = binary;
    }

    public async compiler(): Promise<object> {
        return new Promise((resolve, reject) => {
            const cshard: CShardCode  = new CShardCode();
            resolve({ stdout: cshard.runCode('file path c#') });
        });
    }
}
