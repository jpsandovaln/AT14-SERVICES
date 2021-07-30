const Parameter = require("./parameter");

class PythonParameter extends Parameter {

    constructor(filePath, pythonBinaryPath) {
        super(filePath);
        this._pythonBinaryPath = pythonBinaryPath;
    }

    get pythonBinaryPath() {
        return this._pythonBinaryPath;
    }

    set pythonBinaryPath(value) {
        this._pythonBinaryPath = value;
    }
}

module.exports = PythonParameter;
