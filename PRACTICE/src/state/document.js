const INIT_STATE = "init";
const REVIEW_STATE = "review";
const PROGRESS_STATE = "progress";
const COMPLETE_STATE = "complete";

class Document {
    constructor(title, pathFile) {
        this._title = title;
        this._pathFile = pathFile;
        this._currentState = INIT_STATE;
    }

    set state(state) {
        this._currentState = state;
    }

    displayState() {
        if (INIT_STATE === this._currentState) {
           this.printInitState();
        }
        if (REVIEW_STATE === this._currentState) {
            console.info("review state");
        }
        if (PROGRESS_STATE === this._currentState) {
            console.info("progress state");
        }
        if (COMPLETE_STATE === this._currentState) {
            console.info("complete state");
        }  
    }

    printInitState() {
        console.info("Init state");
    }
}

module.exports = Document;
