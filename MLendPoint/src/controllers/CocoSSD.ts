import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { node } from "@tensorflow/tfjs-node";
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

    constructor(image: string, searchWord: string, percentage: number) {
        super(image, searchWord, percentage);
    }

    async loadModel(): Promise<cocoSsd.DetectedObject[]> {
        const image = fs.readFileSync(this.image);
        const processInput: any = node.decodeImage(image);
        console.log("CocoSSD", cocoSsd);
        const model = await cocoSsd.load();
        const predictions = await model.detect(processInput);
        return predictions;
    }

    async getJSON(): Promise<any> {
        let quantity = 0;
        this.predictions = await this.loadModel();
        const arr: any = [];
        this.predictions.forEach((element: any) => {
            const searchWord = new RegExp(this.searchWord.trim(), "i");
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

    parse(arr: any): any {
        const arrParse: any = [];
        arr.forEach((element: any) => {
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
