const PythonCommand = require('../command/python_command');
const PythonParameter = require('../parameter/python_parameter');
const Execute = require('../execute/execute');
const Compiler = require('./compiler');

class PythonCompiler extends Compiler {
    constructor(path, binary) {
        super();
        this._path = path;
        this._binary = binary;
    }

    async compiler() {
        const pythonCommand = new PythonCommand();
        const pythonParameter = new PythonParameter(this._path, this._binary);
        const command = pythonCommand.build(pythonParameter);
        return await this.execute.run(command);
    }
}

module.exports = PythonCompiler;
