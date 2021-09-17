const IDocState = require("./state");

class CompleteState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("Complete state");
    }
}

module.exports = CompleteState;
