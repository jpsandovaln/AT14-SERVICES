import { Compiler } from "./compiler";
import { JavaCompiler } from "./java_compiler";
import { JavaCompilerProxy } from "./java_compiler_proxy";
import { PythonCompiler } from "./python_compiler";
import { CShardCompiler } from "./cshard_compiler_adapter";
import { CompilerException } from "../../common/exception/compiler_exception";

export class CompilerFactory {
    public static getInstance(lang: string, path: string, binary: string): Compiler {
        if (lang === "java") {
            return new JavaCompiler(path, binary);
        }
        if (lang === "javaproxy") {
            return new JavaCompilerProxy(path, binary);
        }
        if (lang === "python") {
            return new PythonCompiler(path, binary);
        }
        if (lang === "cshard") {
            return new CShardCompiler(path, binary);
        }
        //throw new CompilerException('Language not supported', 400, 'SB-151');
        throw new Error('Language not supported');
    }
}
