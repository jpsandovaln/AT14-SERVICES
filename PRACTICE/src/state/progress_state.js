const IDocState = require("./state");

class ProgressState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("Progress state");
    }
}

module.exports = ProgressState;
