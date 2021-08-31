const IDocState = require("./state");

class RejectState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("reject state");
    }
}

module.exports = RejectState;
