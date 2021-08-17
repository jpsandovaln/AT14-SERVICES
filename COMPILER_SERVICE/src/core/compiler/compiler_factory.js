const Compiler = require("./compiler");
const JavaCompiler = require("./java_compiler");
const PythonCompiler = require("./python_compiler");
const CShardCompiler = require("./cshard_compiler_adapter");

class CompilerFactory {
    static getInstance(lang, path, binary) {
        if (lang === "java") {
            return new JavaCompiler(path, binary);
        }
        if (lang === "python") {
            return new PythonCompiler(path, binary);
        }
        if (lang === "cshard") {
            return new CShardCompiler(path, binary);
        }
        throw new Error("Invalid language");
    }
}

module.exports = CompilerFactory;
