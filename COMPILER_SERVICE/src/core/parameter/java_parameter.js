const fs = require("fs");
const path = require("path");
const Parameter = require("./parameter");
const ParameterInvalidException = require('../../common/exception/parameter_exception');
const NotNullOrEmptyValidation = require("../../common/validation/not_null_or_empty_validation");
const FileValidation = require("../../common/validation/file_validation");
const FolderValidation = require("../../common/validation/folder_validation");
const Context = require("../../common/validation/context");

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
        const strategies = [];
        strategies.push(new NotNullOrEmptyValidation("filePath", this._filePath));
        /*strategies.push(new NotNullOrEmptyValidation("javaBinaryPath", this._javaBinaryPath));
        strategies.push(new FileValidation(this._filePath, [".java"]));
        strategies.push(new FolderValidation(this._javaBinaryPath));*/

        const context = new Context(strategies);
        context.validate();
    }
}

module.exports = JavaParameter;
