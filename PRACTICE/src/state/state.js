class IDocState {
    constructor() {
        if (this.constructor == IDocState) {
            throw new Error("IDocState abtract cñass cannot not be instantiated");
        }
    }

    displayState() {
        throw new Error("displayState() must be implemented");
    }
}

module.exports = IDocState;
