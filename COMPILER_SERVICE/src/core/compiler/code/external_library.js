class ExternalLibrary {

    constructor() {

    }

    addFile(file) {
        this._addFile = file;
        return this;
    }

    execute() {
        return 'cshard compiler';
    }
}

module.exports = ExternalLibrary;
