const IDocState = require("./state");

class InitState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("Init state");
    }
}

module.exports = InitState;
