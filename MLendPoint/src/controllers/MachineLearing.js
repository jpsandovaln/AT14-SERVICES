const cocoSsd = require("@tensorflow-models/coco-ssd");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

/**
 * @Class
 * Build an instance
 *
 */

class MachineLearing {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    constructor(imagePath, searchWord, percentage) {
        if (new.target === MachineLearing)
            throw Error("Abstract class cannot be Instantiated");
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = undefined;
    }
}

module.exports = MachineLearing;
