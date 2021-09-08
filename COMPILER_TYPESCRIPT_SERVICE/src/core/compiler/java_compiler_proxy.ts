import { Compiler } from "./compiler";
import { CompilerException } from "../../common/exception/compiler_exception";
import { JavaCompiler } from "./java_compiler";
<<<<<<< Updated upstream
import { Executer } from "../execute/executer";

export class JavaCompilerProxy extends Compiler {
=======

export class JavaCompilerProxy implements Compiler {
>>>>>>> Stashed changes
    private _path: string;
    private _binary: string;
    private _javaCompiler: JavaCompiler;

<<<<<<< Updated upstream
    constructor(execute:Executer, path: string, binary: string) {
        super(execute);
        this._path = path;
        this._binary = binary;
        this._javaCompiler = new JavaCompiler(execute, this._path, this._binary);
=======
    constructor(path: string, binary: string) {
        this._path = path;
        this._binary = binary;
        this._javaCompiler = new JavaCompiler(this._path, this._binary);
>>>>>>> Stashed changes
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
