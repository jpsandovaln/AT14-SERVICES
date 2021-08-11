const cocoSsd = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

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

    async testModel() {
        const buf = fs.readFileSync(this.image);
        const input = tf.node.decodeJpeg(buf);

        const model = await cocoSsd.load({ 'base': 'mobilenet_v2' });
        const predictions = await model.detect(input);

        console.log('Predictions: ');
        console.log(predictions);
        this.predictions = predictions;
        return '';
    }

    async loadModel() {
        const image = fs.readFileSync(this.image);
        //const buf = Buffer.from(image);
        //const uint8array = new Uint8Array(buf);
        //const processInput = tf.node.decodeImage(uint8array, 3).expandDims();
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
            let searchWord = new RegExp(this.searchWord, 'i');
            if (element.class.search(searchWord) != -1 && element.score >= this.percentage) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return this.parse(arr);
    }

    test() {
        // Load the Coco SSD model and image.
        Promise.all([cocoSsd.load(), fs.readFile(this.image)])
            .then((results) => {
                // First result is the COCO-SSD model object.
                const model = results[0];
                console.log(model);
                // Second result is image buffer.
                const imgTensor = tf.node.decodeImage(new Uint8Array(results[1]), 3);
                console.log(imgTensor);
                // Call detect() to run inference.
                return model.detect(imgTensor);
            })
            .then((predictions) => {
                console.log(JSON.stringify(predictions, null, 2));
            });
    }
    
    
    parse(arr) {
        let arrParse = new Array();
        arr.forEach((element) => {
            let arrAux = { className: element.class, probability: element.score };
            arrParse.push(arrAux);
        });
        return arrParse;
    }
}

async function callAsync() {
    const obj = new CocoSSD(__dirname+'/../../public/images/1.jpg', 'DOG', 0.5);
    const result = await obj.getJSON();
    console.log(result);
}
callAsync();


module.exports = CocoSSD;
