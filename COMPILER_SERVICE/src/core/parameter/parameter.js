class Parameter {
    constructor(filePath) {
        this._filePath = filePath;
    }

    get filePath() {
        return this._filePath;
    }

    set filePath(value) {
        this._filePath = value;
    }
}

module.exports = Parameter;
