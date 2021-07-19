require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');
const fs = require("fs");

init();
function init() {
    (async () => {

        // Load the model.
        const model = await cocoSsd.load();
        
        // Classify the image.
        var image = fs.readFileSync('./store/pastoraleman.jpg');
    
        // Classify the image.
        const predictions = await model.detect(image);
    
        console.log('Predictions: ');
        console.log(predictions);

    })();
}