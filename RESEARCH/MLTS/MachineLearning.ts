/**
 * @Class
 * Build an instance 
 * 
 */

 abstract class MachineLearning {

    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    image: any;
    searchWord: any;
    percentage: any;
    predictions: any;

    constructor(imagePath: any, searchWord: any, percentage: any) {
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = [];
    }
}

export default  MachineLearning ;
