const fs = require("fs");
const path = require("path");
const ParameterInvalidException = require("../../common/exception/parameter_exception");
const Parameter = require("./parameter");
const NotNullOrEmptyValidation = require("../../common/validation/not_null_or_empty_validation");
const FileValidation = require("../../common/validation/file_validation");
const FolderValidation = require("../../common/validation/folder_validation");
const Context = require("../../common/validation/context");

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
        const strategies = [];
        strategies.push(new NotNullOrEmptyValidation("filePath", this._filePath));
        strategies.push(new FileValidation(this._filePath, [".py"]));
        strategies.push(new FolderValidation(this._pythonBinaryPath));

        const context = new Context(strategies);
        context.validate();
    }
}

module.exports = PythonParameter;
