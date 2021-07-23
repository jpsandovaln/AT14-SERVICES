const cocoSsd = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
//const fs = require('fs').promises;

class MachineLearing {

    constructor(image, searchWord, percentage) {
        this.image = image;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = undefined;
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
        /*
        console.log('Predictions: ');
        console.log(predictions);
        */
        return predictions;
    }

    async getJSON() {
        let quantity = 0;
        this.predictions = await this.loadModel();
        let arr = new Array();
        this.predictions.forEach((element) => {
            if (element.class === this.searchWord && element.score >= this.percentage) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return arr;
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
}
/*
async function callAsync() {
    const obj = new MachineLearing(__dirname+'/../../public/images/1626305450874.jpg', 'dog', 0.5);
    const result = await obj.getJSON();
    console.log(result);
}
callAsync();
*/
//console.log();

module.exports = MachineLearing;
