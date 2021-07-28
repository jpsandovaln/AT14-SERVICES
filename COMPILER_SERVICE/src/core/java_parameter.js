const Parameter = require("./parameter");

class JavaParameter extends Parameter {

    constructor(filePath, javaBinaryPath) {
        super(filePath);
        this.javaBinaryPath = javaBinaryPath;
    }

    getJavaBinaryPath() {
        return this.javaBinaryPath;
    }

}

module.exports = JavaParameter;
