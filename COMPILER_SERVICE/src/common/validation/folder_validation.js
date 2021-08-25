const fs = require("fs");
const ValidateStrategy = require("./validate_strategy");
const ParameterInvalidException = require("../exception/parameter_exception");

class FolderValidation extends ValidateStrategy {

    constructor(value) {
        super();
        this._value = value;
    }

    validate() {
        const currentFolder = fs.statSync(this._value);
        if (!currentFolder.isDirectory()) {
            throw new ParameterInvalidException('The path is not a folder', 'SAB-0124587');
        }
    }
}

module.exports = FolderValidation;
