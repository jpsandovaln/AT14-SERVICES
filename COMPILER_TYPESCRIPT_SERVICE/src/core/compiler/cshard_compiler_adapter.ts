import { Compiler } from "./compiler";
import { CShardCode } from "./code/cshard_code";

export class CShardCompiler extends Compiler {
    private _path: string;
    private _binary: string;

    constructor(path: string, binary: string) {
        super();
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
