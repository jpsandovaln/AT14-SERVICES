const CompilerException = require("../../common/exception/compiler_exception");
const JavaCompiler = require("./java_compiler");
const Compiler = require('./compiler');

class JavaCompilerProxy extends Compiler {
    constructor(path, binary) {
        super();
        this._path = path;
        this._binary = binary;
        this.javaCompiler = new JavaCompiler(path, binary);
    }
    async compiler() {
        if(this.checkAccess()) {
            return this.javaCompiler.compiler();
        } else {
            throw new CompilerException('Access denied', 401, 'SAB-987444');
        }
    }

    checkAccess() {
        const currentTime = new Date();
        const hour = currentTime.getHours();
        console.info('hour: ' + hour);
        return hour >= 17;
    }
}

module.exports = JavaCompilerProxy;
