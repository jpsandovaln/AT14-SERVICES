const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require("path");
import MachineLearning from './MachineLearning';

class MobilNet extends MachineLearning {

    image: any;
    searchWord: any;
    percentage: any;    
    predictions: any;

    constructor(image: any, searchWord: any, percentage: any) {
        
        super(image, searchWord, percentage);
    }

    async loadmodel() {
        const image = fs.readFileSync(this.image);
        const tfimage = tfnode.node.decodeImage(image);
        const model = await mobilenet.load();
        const predictions = await model.classify(tfimage);
        return predictions;
    }

    async getJSON(){
        let quantity = 0;
        this.predictions = await this.loadmodel();
        let arr = new Array();
        this.predictions.forEach((element: any) => {
            let searchWord = new RegExp(this.searchWord, 'i');
            if (element.className.search(searchWord) != -1 && element.probability >= this.percentage) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return this.parse(arr);
    }

    parse(arr: any[]) {
        let arrParse = new Array();
        arr.forEach((element) => {
            arrParse.push(element);
        });
        return arrParse;
    }
}

async function runtest() {
    const obj = new MobilNet(
        path.join(
            "C:/Users/Jc_Ze/OneDrive/Escritorio/LastImages/1.jpg"
        ),
        "",
        0.1
    );
    const result = await obj.getJSON();
    console.log(result);
}

runtest();
