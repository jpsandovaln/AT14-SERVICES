const InitState = require("./init_state");

class ImportantDocument {
    constructor(title, filePath) {
        this._title = title;
        this._filePath = filePath;
        this._docState = new InitState();
    }

    set state(stateInstance) {
        this._docState = stateInstance;
    }

    displayState() {
        this._docState.displayState();
    }
}

module.exports = ImportantDocument;