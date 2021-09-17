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

    validate() {
        throw new Error('validate() must be implemented');
    }
}

module.exports = Parameter;
