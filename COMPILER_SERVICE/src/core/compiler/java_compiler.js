const JavaCommand = require('../command/java_command');
const JavaParameter = require('../parameter/java_parameter');
const Execute = require('../execute/execute');
const Compiler = require('./compiler');

class JavaCompiler extends Compiler {
    constructor(path, binary) {
        super();
        this._path = path;
        this._binary = binary;
    }

    async compiler() {
        const javaCommand = new JavaCommand();
        const javaParameter = new JavaParameter(this._path, this._binary);
        const command = javaCommand.build(javaParameter);
        return await this.execute.run(command);
    }
}

module.exports = JavaCompiler;
