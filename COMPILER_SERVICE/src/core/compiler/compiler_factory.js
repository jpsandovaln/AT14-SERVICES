const Compiler = require("./compiler");
const JavaCompiler = require("./java_compiler");
const PythonCompiler = require("./python_compiler");

class CompilerFactory {
    static getInstance(lang, path, binary) {
        if (lang === "java") {
            return new JavaCompiler(path, binary);
        }
        if (lang === "python") {
            return new PythonCompiler(path, binary);
        }
        throw new Error("Invalid language");
    }
}

module.exports = CompilerFactory;
