import { Compiler } from "./compiler";
import { CompilerException } from "../../common/exception/compiler_exception";
import { JavaCompiler } from "./java_compiler";

export class JavaCompilerProxy extends Compiler {
    private _path: string;
    private _binary: string;
    private _javaCompiler: JavaCompiler;

    constructor(path: string, binary: string) {
        super();
        this._path = path;
        this._binary = binary;
        this._javaCompiler = new JavaCompiler(this._path, this._binary);
    }
    
    public async compiler(): Promise<object> {
        if(this.checkAccess()) {
            return this._javaCompiler.compiler();
        } else {
            throw new CompilerException('Access denied', 401, 'SAB-987444');
        }
    }

    checkAccess(): boolean {
        const currentTime: Date = new Date();
        const hour: number = currentTime.getHours();
        return hour >= 17;
    }
}
