const IDocState = require("./state");

class ReviewState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("Review state");
    }
}

module.exports = ReviewState;
