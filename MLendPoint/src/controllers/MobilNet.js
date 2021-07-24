const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');

/**
 * @Class
 * Build an instance from Machine Learning
 * 
 */

class MobilNet extends require("./MachineLearing") {

    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    constructor(image, searchWord, percentage) {
        super(image, searchWord, percentage);
    }

    async loadmodel() {
        const image = fs.readFileSync(this.image);
        const tfimage = tfnode.node.decodeImage(image);
        const model = await mobilenet.load();
        const predictions = await model.classify(tfimage);
        return predictions;
    }

    async getJSON() {
        let quantity = 0;
        this.predictions = await this.loadmodel();
        let arr = new Array();
        this.predictions.forEach((element) => {
            let searchWord = new RegExp(this.searchWord, 'i');
            if (element.className.search(searchWord) != -1 && element.probability >= this.percentage) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return this.parse(arr);
    }

    parse(arr) {
        let arrParse = new Array();
        arr.forEach((element) => {
            arrParse.push(element);
        });
        return arrParse;
    }
}

/*
async function callAsync() {
    const obj = new MobilNet(__dirname+'/../../public/images/pastoraleman.jpg', 'bike', 0.5);
    const result = await obj.getJSON();
    console.log(result);
}
callAsync();
*/

module.exports = MobilNet;