import * as mobilenet from "@tensorflow-models/mobilenet";
import { node } from "@tensorflow/tfjs-node";
import MachineLearing from "./MachineLearing";
import * as fs from "fs";

/**
 * @Class
 * Build an instance from Machine Learning
 *
 */

class MobilNet extends MachineLearing {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    constructor(image: any, searchWord: string, percentage: number) {
        super(image, searchWord, percentage);
    }

    async loadmodel(): Promise<any> {
        const image = fs.readFileSync(this.image);
        const tfimage: any = node.decodeImage(image);
        const model = await mobilenet.load();
        const predictions = await model.classify(tfimage);
        return predictions;
    }

    async getJSON(): Promise<any> {
        let quantity = 0;
        this.predictions = await this.loadmodel();
        const arr: any = [];
        this.predictions.forEach((element: any) => {
            const searchWord = new RegExp(this.searchWord, "i");
            if (
                element.className.search(searchWord) != -1 &&
                element.probability >= this.percentage
            ) {
                quantity = quantity + 1;
                arr.push(element);
            }
        });
        return this.parse(arr);
    }

    parse(arr: any): any {
        const arrParse: any[] = [];
        arr.forEach((element: any) => {
            arrParse.push(element);
        });
        return arrParse;
    }
}

export default MobilNet;
