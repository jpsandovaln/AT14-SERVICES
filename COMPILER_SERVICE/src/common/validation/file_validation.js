const fs = require("fs");
const path = require("path");
const ValidateStrategy = require("./validate_strategy");
const ParameterInvalidException = require("../exception/parameter_exception");

class FileValidation extends ValidateStrategy {

    constructor(value, extensions) {
        super();
        this._value = value;
        this._extensions = extensions;
    }

    validate() {
        const currentFile = fs.statSync(this._value);
        if (!currentFile.isFile()) {
            throw new ParameterInvalidException('The path is not a file', 'SAB-0124587');
        }

        if (currentFile.size === 0) {
            throw new ParameterInvalidException('The file size is zero', 'SAB-0124587');
        }

        const ext = path.extname(this._value);
        if (!this._extensions.includes(ext)) {
            throw new ParameterInvalidException('invalid extension', 'SAB-0124587');
        }
    }
}

module.exports = FileValidation;
