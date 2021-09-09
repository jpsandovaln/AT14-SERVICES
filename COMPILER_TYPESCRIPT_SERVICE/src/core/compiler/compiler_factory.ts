import { Compiler } from "./compiler";
import { JavaCompiler } from "./java_compiler";
import { JavaCompilerProxy } from "./java_compiler_proxy";
import { PythonCompiler } from "./python_compiler";
import { CShardCompiler } from "./cshard_compiler_adapter";
import { CompilerException } from "../../common/exception/compiler_exception";
import { Executer } from "../execute/executer";

export class CompilerFactory {
    public static getInstance(executer: Executer, lang: string, path: string, binary: string): Compiler {
        if (lang === "java") {
            return new JavaCompiler(executer, path, binary);
        }
        if (lang === "javaproxy") {
            return new JavaCompilerProxy(executer, path, binary);
        }
        if (lang === "python") {
            return new PythonCompiler(executer, path, binary);
        }
        if (lang === "cshard") {
            return new CShardCompiler(executer, path, binary);
        }
        throw new CompilerException('Language not supported', 400, 'SB-151');
    }
}
