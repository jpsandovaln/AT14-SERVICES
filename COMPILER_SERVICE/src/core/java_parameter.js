class JavaParameter {

    constructor(filePath, javaBinaryPath) {
        this.filePath = filePath;
        this.javaBinaryPath = javaBinaryPath;
    }

    getFilePath() {
        return this.filePath;
    }

    getJavaBinaryPath() {
        return this.javaBinaryPath;
    }
}

module.exports = JavaParameter;
