const ParameterInvalidException = require("../../common/exception/parameter_exception");
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
            throw new ParameterInvalidException('parameter invalid.', 'SAB-0124588');
        }
    }
}

module.exports = PythonParameter;
