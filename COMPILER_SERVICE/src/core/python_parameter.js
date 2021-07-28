const Parameter = require("./parameter");

class PythonParameter extends Parameter {

    constructor(filePath, pythonBinaryPath) {
        super(filePath);
        this.pythonBinaryPath = pythonBinaryPath;
    }

    getPythonBinaryPath() {
        return this.pythonBinaryPath;
    }
}

module.exports = PythonParameter;
