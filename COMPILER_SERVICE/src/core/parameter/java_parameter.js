const Parameter = require("./parameter");
const ParameterInvalidException = require('../../command/exception/parameter_exception');

class JavaParameter extends Parameter {

    constructor(filePath, javaBinaryPath) {
        super(filePath);
        this._javaBinaryPath = javaBinaryPath;
    }

    get javaBinaryPath() {
        return this._javaBinaryPath;
    }

    set javaBinaryPath(value) {
        this._javaBinaryPath = value;
    }

    validate() {
        if (!this._filePath || !this._javaBinaryPath) {
            throw new ParameterInvalidException('parameter invalid.', 404, 'SAB-0124587');
        }
    }
}

module.exports = JavaParameter;
