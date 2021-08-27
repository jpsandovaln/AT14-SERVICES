import cocoSsd from "@tensorflow-models/coco-ssd";
import tf from "@tensorflow/tfjs-node";
import MachineLearing from "./MachineLearing";
import fs from "fs";

/**
 * @Class
 * Build an instance from Machine Learning
 *
 */

class CocoSSD extends MachineLearing {
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
        let arr = [];
        this.predictions.forEach((element) => {
            const searchWord = new RegExp(this.searchWord, "i");
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
        let arrParse = [];
        arr.forEach((element) => {
            const arrAux = {
                className: element.class,
                probability: element.score
            };
            arrParse.push(arrAux);
        });
        return arrParse;
    }
}

export default CocoSSD;
