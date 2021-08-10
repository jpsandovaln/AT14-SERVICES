const cocoSsd = require("@tensorflow-models/coco-ssd");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

/**
 * @Class
 * Build an instance from Machine Learning
 *
 */

class CocoSSD extends require("./MachineLearing") {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    constructor(image, searchWord, percentage) {
        super(image, searchWord, percentage);
    }

    async loadModel() {
        const image = fs.readFileSync(this.image);

        const processInput = tf.node.decodeImage(image);

        const model = await cocoSsd.load();
        const predictions = await model.detect(processInput);
        return predictions;
    }

    async getJSON() {
        let quantity = 0;
        this.predictions = await this.loadModel();
        let arr = new Array();
        this.predictions.forEach((element) => {
            let searchWord = new RegExp(this.searchWord, "i");
            if (
                element.class.search(searchWord) != -1 &&
                element.score >= this.percentage
            ) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return this.parse(arr);
    }

    parse(arr) {
        let arrParse = new Array();
        arr.forEach((element) => {
            let arrAux = {
                className: element.class,
                probability: element.score
            };
            arrParse.push(arrAux);
        });
        return arrParse;
    }
}

module.exports = CocoSSD;
