const Parameter = require("./parameter");

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

}

module.exports = JavaParameter;
