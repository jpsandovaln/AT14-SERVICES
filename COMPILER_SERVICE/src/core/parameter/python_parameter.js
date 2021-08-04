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

    validate() {
        if (!this._filePath || !this._pythonBinaryPath) {
            throw new Error('parameter invalid.');
        }
    }
}

module.exports = PythonParameter;
